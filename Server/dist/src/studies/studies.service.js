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
exports.StudiesService = void 0;
const common_1 = require("@nestjs/common");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const get_study_dto_1 = require("./dto/get-study.dto");
const study_entity_1 = require("./entity/study.entity");
let StudiesService = class StudiesService {
    constructor(connection) {
        this.connection = connection;
    }
    async createStudy(createStudyDto) {
        const study = new study_entity_1.Study();
        const queryRunner = this.connection.createQueryRunner();
        study.name = createStudyDto.name;
        study.description = createStudyDto.description;
        study.totalHeadcount = createStudyDto.totalHeadcount;
        study.leaderName = createStudyDto.leaderName;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await user_entity_1.User.findOne({
                where: {
                    userIdx: createStudyDto.leaderUserIdx
                }
            });
            await queryRunner.manager.save(study);
            const userStudy = new user_entity_1.UserStudy();
            userStudy.user = user;
            userStudy.study = study;
            userStudy.status = 'leader';
            await queryRunner.manager.save(userStudy);
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('스터디 생성에 실패하였습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateStudy(studyIdx, updateStudyDto) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(study_entity_1.Study, studyIdx, updateStudyDto);
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('스터디 정보 수정에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async acceptCreate(studyIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(study_entity_1.Study, studyIdx, {
                status: 'collecting'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('스터디 생성 요청 승인에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        try {
            const studies = await study_entity_1.Study.find({
                relations: [
                    'userStudies'
                ]
            });
            studies.forEach((study) => {
                study.numParticipant = study.userStudies.filter((userStudy) => userStudy.status == 'leader' || userStudy.status == 'accepted').length;
                delete study.userStudies;
            });
            return new get_study_dto_1.GetStudiesResponseDto(studies);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('모든 스터디 불러오기를 실패했습니다.');
        }
    }
    async findOne(studyIdx) {
        try {
            const study = await study_entity_1.Study.find({
                where: {
                    studyIdx: studyIdx
                },
                relations: [
                    'userStudies',
                    'userStudies.user'
                ]
            });
            return new get_study_dto_1.GetStudyResponseDto(study);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('스터디 불러오기를 실패했습니다.');
        }
    }
    async remove(studyIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(study_entity_1.Study, studyIdx, {
                status: 'deleted'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('스터디 삭제에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async apply(userIdx, studyIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await user_entity_1.User.findOne({
                where: {
                    userIdx: userIdx
                }
            });
            const study = await study_entity_1.Study.findOne({
                where: {
                    studyIdx: studyIdx
                }
            });
            const userStudy = new user_entity_1.UserStudy();
            userStudy.user = user;
            userStudy.study = study;
            await queryRunner.manager.save(userStudy);
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('스터디 신청에 실패했습니다.');
        }
        finally {
            queryRunner.release();
        }
    }
    async acceptParticipation(userStudyIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(user_entity_1.UserStudy, userStudyIdx, {
                status: 'accepted'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('스터디 참여 승인에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async rejectParticipation(userStudyIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(user_entity_1.UserStudy, userStudyIdx, {
                status: 'rejected'
            });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('스터디 참여 거부에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
};
StudiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], StudiesService);
exports.StudiesService = StudiesService;
//# sourceMappingURL=studies.service.js.map