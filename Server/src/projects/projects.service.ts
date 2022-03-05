import { Injectable } from '@nestjs/common';
import { BaseFailResponse, BaseSuccessResponse, ResultSuccessResponse } from 'src/commons/dto/response-common.dto';
import { User, UserProject } from 'src/users/entities/user.entity';
import { Connection } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectTechStack } from './entity/project.entity';

@Injectable()
export class ProjectsService {
    constructor(
        private connection: Connection,
    ) {}
    async createProject(createProjectDto: CreateProjectDto) {
        const project = new Project();
        const queryRunner = this.connection.createQueryRunner();
        project.name = createProjectDto.name;
        project.description = createProjectDto.description;
        project.totalHeadcount = createProjectDto.totalHeadcount;
        project.leaderName = createProjectDto.leaderName;

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(project);

            const user: User = await User.findOne({
                where: {
                    userIdx: createProjectDto.leaderUserIdx
                }
            });
            
            const userProject = new UserProject();
            userProject.user = user;
            userProject.project = project;
            userProject.status = 'leader';

            await queryRunner.manager.save(userProject);

            const promises = createProjectDto.techStacks.map(async (techStack) => {
                const projectTechStack = new ProjectTechStack();
                projectTechStack.name = techStack;
                projectTechStack.project = project;
                await queryRunner.manager.save(projectTechStack);
            });
            await Promise.all(promises);

            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('프로젝트 생성에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateProject(projectIdx: number, updateProjectDto: UpdateProjectDto) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const exTechStacks: ProjectTechStack[] = await ProjectTechStack.find({
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
                    await queryRunner.manager.delete(ProjectTechStack, exTechStack.projectTechStackIdx);
                }
            });
            await Promise.all(deletingTechStacks);

            const insertingTechStacks = updateProjectDto.techStacks.map(async (techStack) => {
                if (!nameOfexTechStacks.includes(techStack)) {
                    const projectTechStack = new ProjectTechStack();
                    projectTechStack.name = techStack;
                    projectTechStack.projectIdx = projectIdx;
                    await queryRunner.manager.save(projectTechStack);
                }
            });
            await Promise.all(insertingTechStacks);
            
            delete updateProjectDto.techStacks;

            if (Object.keys(updateProjectDto).length) {
                await queryRunner.manager.update(Project, projectIdx, updateProjectDto)
            }
            
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('프로젝트 정보 수정에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async acceptCreate(projectIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(Project, projectIdx, {
                status: 'collecting'
            });
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('프로젝트 생성 요청 승인에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async findAll() {
        try {
            const projects = await Project.find({
                relations: [
                    "projectTechStacks"
                ]
            });
            return new ResultSuccessResponse(projects);
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('모든 프로젝트 불러오기를 실패했습니다.');
        }
    }

    async findOne(projectIdx: number) {
        try {
            const project = await Project.find({
                where: {
                    projectIdx: projectIdx
                },
                relations: [
                    "userProjects",
                    "projectTechStacks"
                ]
            });
            return new ResultSuccessResponse(project);
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('프로젝트 불러오기를 실패했습니다.');
        }
    }

    async remove(projectIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(Project, projectIdx, {
                status: 'deleted'
            });
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('프로젝트 삭제에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async apply(userIdx: number, projectIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user: User = await User.findOne({
                where: {
                    userIdx: userIdx
                }
            });
            const project: Project = await Project.findOne({
                where: {
                    projectIdx: projectIdx
                }
            });
            const userProject = new UserProject();
            userProject.user = user;
            userProject.project = project;

            await queryRunner.manager.save(userProject);
            await queryRunner.commitTransaction();

            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('프로젝트 신청에 실패했습니다.');
        } finally {
            queryRunner.release();
        }
    }

    async acceptParticipation(userProjectIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(UserProject, userProjectIdx, {
                status: 'accepted'
            });
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('프로젝트 참여 승인에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async rejectParticipation(userProjectIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(UserProject, userProjectIdx, {
                status: 'rejected'
            });
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('프로젝트 참여 거부에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }
}