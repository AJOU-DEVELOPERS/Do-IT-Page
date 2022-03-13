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
exports.ClubController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_jwt_guard_1 = require("../auths/auth.jwt.guard");
const roles_decorator_1 = require("../auths/roles.decorator");
const roles_guard_1 = require("../auths/roles.guard");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const club_service_1 = require("./club.service");
const get_clubUser_dto_1 = require("./dto/get-clubUser.dto");
let ClubController = class ClubController {
    constructor(clubService) {
        this.clubService = clubService;
    }
    create(req) {
        return this.clubService.create(req.user.userIdx);
    }
    accept(req, param) {
        const clubIdx = param.clubIdx;
        return this.clubService.acceptClub(param.clubIdx);
    }
    refuse(req, param) {
        const clubIdx = param.clubIdx;
        return this.clubService.refuseClub(clubIdx);
    }
    findAll() {
        return this.clubService.findClubList();
    }
};
__decorate([
    (0, roles_decorator_1.Roles)('M'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: '동아리 신청',
        description: '동아리 신청 api.',
    }),
    (0, swagger_1.ApiOkResponse)({ description: '신청 성공', type: response_common_dto_1.BaseSuccessResponse }),
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClubController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('M'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: '동아리 승인',
        description: '동아리 승인 api.',
    }),
    (0, swagger_1.ApiOkResponse)({ description: '승인 성공', type: response_common_dto_1.BaseSuccessResponse }),
    (0, swagger_1.ApiParam)({ name: 'clubIdx', required: true }),
    (0, common_1.Post)('accept/:clubIdx'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ClubController.prototype, "accept", null);
__decorate([
    (0, roles_decorator_1.Roles)('M'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: '동아리 거절',
        description: '동아리 거절 api.',
    }),
    (0, swagger_1.ApiOkResponse)({ description: '거절 성공', type: response_common_dto_1.BaseSuccessResponse }),
    (0, swagger_1.ApiParam)({ name: 'clubIdx', required: true }),
    (0, common_1.Post)('refuse/:clubIdx'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ClubController.prototype, "refuse", null);
__decorate([
    (0, roles_decorator_1.Roles)('M'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, swagger_1.ApiOperation)({
        summary: '동아리 회원 목록',
        description: '동아리 회원 목록 api.',
    }),
    (0, swagger_1.ApiOkResponse)({ description: ' 성공', type: get_clubUser_dto_1.GetClubUserListResponse }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClubController.prototype, "findAll", null);
ClubController = __decorate([
    (0, common_1.Controller)('clubs'),
    (0, swagger_1.ApiTags)('Club API'),
    __metadata("design:paramtypes", [club_service_1.ClubService])
], ClubController);
exports.ClubController = ClubController;
//# sourceMappingURL=club.controller.js.map