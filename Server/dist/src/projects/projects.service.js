"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const get_project_dto_1 = require("./dto/get-project.dto");
const project_entity_1 = require("./entity/project.entity");
let ProjectsService = class ProjectsService {
    constructor(connection) {
        this.connection = connection;
    }
    async createProject(createProjectDto) {
        const project = new project_entity_1.Project();
        const queryRunner = this.connection.createQueryRunner();
        project.name = createProjectDto.name;
        project.description = createProjectDto.description;
        project.totalHeadcount = createProjectDto.totalHeadcount;
        project.leaderName = createProjectDto.leaderName;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(project);
            const user = await user_entity_1.User.findOne({
                where: {
                    userIdx: createProjectDto.leaderUserIdx
                }
            });
            const userProject = new user_entity_1.UserProject();
            userProject.user = user;
            userProject.project = project;
            userProject.status = 'leader';
            await queryRunner.manager.save(userProject);
            const promises = createProjectDto.techStacks.map(async (techStack) => {
                const projectTechStack = new project_entity_1.ProjectTechStack();
                projectTechStack.name = techStack;
                projectTechStack.project = project;
                await queryRunner.manager.save(projectTechStack);
            });
            await Promise.all(promises);
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('프로젝트 생성에 실패하였습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateProject(projectIdx, updateProjectDto) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const exTechStacks = await project_entity_1.ProjectTechStack.find({
                where: {
                    projectIdx: projectIdx
                },
                select: [
                    "projectTechStackIdx",
                    "name"
                ]
            });
            const nameOfexTechStacks = exTechStacks.map((exTechStack) => {
                return exTechStack.name;
            });
            const deletingTechStacks = exTechStacks.map(async (exTechStack) => {
                if (!updateProjectDto.techStacks.includes(exTechStack.name)) {
                    await queryRunner.manager.delete(project_entity_1.ProjectTechStack, exTechStack.projectTechStackIdx);
                }
            });
            await Promise.all(deletingTechStacks);
            const insertingTechStacks = updateProjectDto.techStacks.map(async (techStack) => {
                if (!nameOfexTechStacks.includes(techStack)) {
                    const projectTechStack = new project_entity_1.ProjectTechStack();
                    projectTechStack.name = techStack;
                    projectTechStack.projectIdx = projectIdx;
                    await queryRunner.manager.save(projectTechStack);
                }
            });
            await Promise.all(insertingTechStacks);
            delete updateProjectDto.techStacks;
            if (Object.keys(updateProjectDto).length) {
                await queryRunner.manager.update(project_entity_1.Project, projectIdx, updateProjectDto);
            }
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('프로젝트 정보 수정에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async acceptCreate(projectIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(project_entity_1.Project, projectIdx, {
                status: 'collecting'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('프로젝트 생성 요청 승인에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        try {
            const projects = await project_entity_1.Project.find({
                relations: [
                    "userProjects",
                    "projectTechStacks"
                ]
            });
            projects.forEach((project) => {
                project.numParticipant = project.userProjects.filter((userProject) => userProject.status == 'leader' || userProject.status == 'accepted').length;
                delete project.userProjects;
            });
            return new get_project_dto_1.GetProjectsResponseDto(projects);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('모든 프로젝트 불러오기를 실패했습니다.');
        }
    }
    async findOne(projectIdx) {
        try {
            const project = await project_entity_1.Project.find({
                where: {
                    projectIdx: projectIdx
                },
                relations: [
                    "userProjects",
                    "projectTechStacks"
                ]
            });
            return new get_project_dto_1.GetProjectResponseDto(project);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('프로젝트 불러오기를 실패했습니다.');
        }
    }
    async remove(projectIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(project_entity_1.Project, projectIdx, {
                status: 'deleted'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('프로젝트 삭제에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async apply(userIdx, projectIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await user_entity_1.User.findOne({
                where: {
                    userIdx: userIdx
                }
            });
            const project = await project_entity_1.Project.findOne({
                where: {
                    projectIdx: projectIdx
                }
            });
            const userProject = new user_entity_1.UserProject();
            userProject.user = user;
            userProject.project = project;
            await queryRunner.manager.save(userProject);
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('프로젝트 신청에 실패했습니다.');
        }
        finally {
            queryRunner.release();
        }
    }
    async acceptParticipation(userProjectIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(user_entity_1.UserProject, userProjectIdx, {
                status: 'accepted'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('프로젝트 참여 승인에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async rejectParticipation(userProjectIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(user_entity_1.UserProject, userProjectIdx, {
                status: 'rejected'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('프로젝트 참여 거부에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map