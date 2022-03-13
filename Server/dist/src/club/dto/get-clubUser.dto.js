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
exports.GetClubUserListResponse = exports.ClubUserResData = exports.ClubUserData = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const response_common_dto_1 = require("../../commons/dto/response-common.dto");
class ClubUserData extends (0, swagger_1.PickType)(user_entity_1.User, [
    'userIdx',
    'id',
    'studentId',
    'name',
    'phoneNumber',
    'status',
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '동아리 회원 인덱스',
        example: 2,
    }),
    __metadata("design:type", Number)
], ClubUserData.prototype, "clubUserIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회비 납부 여부 ( 0 : 미납 , 1 : 수납 )',
        example: 0,
    }),
    __metadata("design:type", Number)
], ClubUserData.prototype, "isPay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '신청 날짜',
        example: '2022-03-06T04:59:55.000Z',
    }),
    __metadata("design:type", String)
], ClubUserData.prototype, "createdAt", void 0);
exports.ClubUserData = ClubUserData;
class ClubUserResData {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '메세지',
        example: 'string',
    }),
    __metadata("design:type", String)
], ClubUserResData.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: () => ClubUserData }),
    __metadata("design:type", Array)
], ClubUserResData.prototype, "clubUserList", void 0);
exports.ClubUserResData = ClubUserResData;
class GetClubUserListResponse extends response_common_dto_1.BaseSuccessResponse {
    constructor(clubUserList) {
        super();
        this.res.clubUserList = clubUserList;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: false, type: () => ClubUserResData }),
    __metadata("design:type", Object)
], GetClubUserListResponse.prototype, "res", void 0);
exports.GetClubUserListResponse = GetClubUserListResponse;
//# sourceMappingURL=get-clubUser.dto.js.map