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
exports.StudiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const create_study_dto_1 = require("./dto/create-study.dto");
const get_study_dto_1 = require("./dto/get-study.dto");
const update_study_dto_1 = require("./dto/update-study.dto");
const studies_service_1 = require("./studies.service");
let StudiesController = class StudiesController {
    constructor(studiesService) {
        this.studiesService = studiesService;
    }
    create(createStudyDto) {
        return this.studiesService.createStudy(createStudyDto);
    }
    findAll() {
        return this.studiesService.findAll();
    }
    findOne(studyIdx) {
        return this.studiesService.findOne(studyIdx);
    }
    update(studyIdx, updateStudyDto) {
        return this.studiesService.updateStudy(studyIdx, updateStudyDto);
    }
    remove(studyIdx) {
        return this.studiesService.remove(studyIdx);
    }
    apply(userIdx, studyIdx) {
        return this.studiesService.apply(userIdx, studyIdx);
    }
    acceptCreate(studyIdx) {
        return this.studiesService.acceptCreate(studyIdx);
    }
    rejectCreate(studyIdx) {
        return this.studiesService.remove(studyIdx);
    }
    acceptParticipation(userStudyIdx) {
        return this.studiesService.acceptParticipation(userStudyIdx);
    }
    reject(userStudyIdx) {
        return this.studiesService.rejectParticipation(userStudyIdx);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 등록 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiBody)({ type: create_study_dto_1.CreateStudyDto }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 등록 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_study_dto_1.CreateStudyDto]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '전체 스터디 불러오기 API',
        description: '성공 시 전체 스터디 혹은 빈 배열 반환, 실패 시 false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({
        type: get_study_dto_1.GetStudiesResponseDto,
        description: '전체 스터디 불러오기 성공'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':studyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 스터디 불러오기 API',
        description: '성공 시 스터디 반환, 실패 시 false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({
        type: get_study_dto_1.GetStudyResponseDto,
        description: '특정 스터디 불러오기 성공'
    }),
    __param(0, (0, common_1.Param)('studyIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':studyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 정보 수정 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiBody)({ type: update_study_dto_1.UpdateStudyDto }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 정보 수정 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Param)('studyIdx')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_study_dto_1.UpdateStudyDto]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':studyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 삭제 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 삭제 성공' }),
    __param(0, (0, common_1.Param)('studyIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':studyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 신청 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 신청 성공' }),
    __param(0, (0, common_1.Body)('userIdx')),
    __param(1, (0, common_1.Param)('studyIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "apply", null);
__decorate([
    (0, common_1.Get)('accept/create/:studyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 생성 요청 승인',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 생성 요청 승인 성공 ' }),
    __param(0, (0, common_1.Param)('studyIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "acceptCreate", null);
__decorate([
    (0, common_1.Get)('reject/create/:studyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 생성 요청 거부',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 생성 요청 거부 성공 ' }),
    __param(0, (0, common_1.Param)('studyIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "rejectCreate", null);
__decorate([
    (0, common_1.Get)('accept/participation/:userStudyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 참여 요청 승인',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 참여 요청 승인 성공' }),
    __param(0, (0, common_1.Param)('userStudyIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "acceptParticipation", null);
__decorate([
    (0, common_1.Get)('reject/participation/:userStudyIdx'),
    (0, swagger_1.ApiOperation)({
        summary: '스터디 참여 요청 거부',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '스터디 참여 요청 거부 성공' }),
    __param(0, (0, common_1.Param)('userStudyIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudiesController.prototype, "reject", null);
StudiesController = __decorate([
    (0, common_1.Controller)('studies'),
    (0, swagger_1.ApiTags)('Study API'),
    __metadata("design:paramtypes", [studies_service_1.StudiesService])
], StudiesController);
exports.StudiesController = StudiesController;
//# sourceMappingURL=studies.controller.js.map