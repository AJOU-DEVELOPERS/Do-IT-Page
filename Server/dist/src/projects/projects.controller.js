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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const create_project_dto_1 = require("./dto/create-project.dto");
const get_project_dto_1 = require("./dto/get-project.dto");
const update_project_dto_1 = require("./dto/update-project.dto");
const projects_service_1 = require("./projects.service");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    create(createProjectDto) {
        return this.projectsService.createProject(createProjectDto);
    }
    findAll() {
        return this.projectsService.findAll();
    }
    findOne(projectIdx) {
        return this.projectsService.findOne(projectIdx);
    }
    update(projectIdx, updateProjectDto) {
        return this.projectsService.updateProject(projectIdx, updateProjectDto);
    }
    remove(projectIdx) {
        return this.projectsService.remove(projectIdx);
    }
    apply(userIdx, projectIdx) {
        return this.projectsService.apply(userIdx, projectIdx);
    }
    acceptCreate(projectIdx) {
        return this.projectsService.acceptCreate(projectIdx);
    }
    rejectCreate(projectIdx) {
        return this.projectsService.remove(projectIdx);
    }
    accept(userProjectIdx) {
        return this.projectsService.acceptParticipation(userProjectIdx);
    }
    reject(userProjectIdx) {
        return this.projectsService.rejectParticipation(userProjectIdx);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 등록 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiBody)({ type: create_project_dto_1.CreateProjectDto }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 등록 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '전체 프로젝트 불러오기 API',
        description: '성공 시 전체 프로젝트 혹은 빈 배열 반환, 실패 시 false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({
        type: get_project_dto_1.GetProjectsResponseDto,
        description: '전체 프로젝트 불러오기 성공'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':projectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 프로젝트 불러오기 API',
        description: '성공 시 프로젝트 반환, 실패 시 false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({
        type: get_project_dto_1.GetProjectResponseDto,
        description: '특정 프로젝트 불러오기 성공'
    }),
    __param(0, (0, common_1.Param)('projectIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':projectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 정보 수정 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiBody)({ type: update_project_dto_1.UpdateProjectDto }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 정보 수정 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Param)('projectIdx')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':projectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 삭제 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 삭제 성공' }),
    __param(0, (0, common_1.Param)('projectIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':projectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 신청 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 신청 성공 ' }),
    __param(0, (0, common_1.Body)('userIdx')),
    __param(1, (0, common_1.Param)('projectIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "apply", null);
__decorate([
    (0, common_1.Get)('accept/create/:projectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 생성 요청 승인',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 생성 요청 승인 성공 ' }),
    __param(0, (0, common_1.Param)('projectIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "acceptCreate", null);
__decorate([
    (0, common_1.Get)('reject/create/:projectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 생성 요청 거부',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 생성 요청 거부 성공 ' }),
    __param(0, (0, common_1.Param)('projectIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "rejectCreate", null);
__decorate([
    (0, common_1.Get)('accept/participation/:userProjectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 참여 요청 승인',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 참여 요청 승인 성공' }),
    __param(0, (0, common_1.Param)('userProjectIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "accept", null);
__decorate([
    (0, common_1.Get)('reject/participation/:userProjectIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '프로젝트 참여 요청 거부',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '프로젝트 참여 요청 거부 성공' }),
    __param(0, (0, common_1.Param)('userProjectIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "reject", null);
ProjectsController = __decorate([
    (0, common_1.Controller)('projects'),
    (0, swagger_1.ApiTags)('Project API'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map