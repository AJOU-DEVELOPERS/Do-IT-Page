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
exports.ClubService = void 0;
const common_1 = require("@nestjs/common");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const semester_entity_1 = require("../semester/entities/semester.entity");
const typeorm_1 = require("typeorm");
const get_clubUser_dto_1 = require("./dto/get-clubUser.dto");
const club_entity_1 = require("./entities/club.entity");
const user_entity_1 = require("../users/entities/user.entity");
let ClubService = class ClubService {
    constructor(connection) {
        this.connection = connection;
    }
    async acceptClub(clubUserIdx) {
        const queryRunner = this.connection.createQueryRunner();
        try {
            const clubUserInfo = (await club_entity_1.ClubUser.findClubUserList()).find((o) => o.clubUserIdx == clubUserIdx);
            if (clubUserInfo.isPay == 1)
                return new response_common_dto_1.BaseSuccessResponse('이미 수락한 유저입니다.');
            await queryRunner.connect();
            const clubUserRepo = queryRunner.manager.getRepository(club_entity_1.ClubUser);
            const userRepo = queryRunner.manager.getRepository(user_entity_1.User);
            await queryRunner.startTransaction();
            await clubUserRepo.update(clubUserIdx, { isPay: 1 });
            if (clubUserInfo.status === 'L')
                await userRepo.update(clubUserInfo.userIdx, { status: 'N' });
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('동아리 수락에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async refuseClub(clubIdx) {
        try {
            await club_entity_1.ClubUser.update(clubIdx, { status: 'Y' });
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('동아리 거절에 실패했습니다.');
        }
    }
    async findClubList() {
        try {
            const clubUserList = await club_entity_1.ClubUser.findClubUserList();
            return new get_clubUser_dto_1.GetClubUserListResponse(clubUserList);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('동아리 회원 목록을 불러오는데 실패하였습니다.');
        }
    }
    async create(userIdx) {
        const userPayCheck = new club_entity_1.ClubUser();
        const semester = new semester_entity_1.Semester();
        const semesterIdx = (await semester.findNowSemester()).semesterIdx;
        const status = 'N';
        const duplicateCheck = club_entity_1.ClubUser.findOne({
            where: { userIdx, semesterIdx, status },
        });
        if (duplicateCheck)
            return new response_common_dto_1.BaseSuccessResponse('이미 신청하였습니다.');
        userPayCheck.userIdx = userIdx;
        userPayCheck.semesterIdx = semesterIdx;
        await userPayCheck.save();
        return new response_common_dto_1.BaseSuccessResponse();
    }
};
ClubService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], ClubService);
exports.ClubService = ClubService;
//# sourceMappingURL=club.service.js.map