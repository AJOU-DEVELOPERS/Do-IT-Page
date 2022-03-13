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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const auth_service_1 = require("../auths/auth.service");
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const auth_local_guard_1 = require("../auths/auth.local.guard");
const duplicateCheck_userId_dto_1 = require("./dto/duplicateCheck-userId.dto");
const auth_jwt_guard_1 = require("../auths/auth.jwt.guard");
const get_user_dto_1 = require("./dto/get-user.dto");
const roles_guard_1 = require("../auths/roles.guard");
const roles_decorator_1 = require("../auths/roles.decorator");
let UsersController = class UsersController {
    constructor(usersService, authsService) {
        this.usersService = usersService;
        this.authsService = authsService;
    }
    async getUsers() {
        return this.usersService.findAll();
    }
    create(createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    async logIn(req, loginUserDto, res) {
        const cookie = await this.authsService.getCookieWithJwtToken(req.user.userIdx, req.user.userName, req.user.status);
        res.cookie('Bearer', cookie);
        return new login_user_dto_1.LoginUserResponseDto(req.user);
    }
    async checkUserDuplicate(id) {
        return this.usersService.findById(id);
    }
    async tokenCheck(req) {
        return new login_user_dto_1.LoginUserResponseDto(req.user);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)('M'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_jwt_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: '유저 목록 API', description: '유저 목록 반환' }),
    (0, swagger_1.ApiBody)({ type: get_user_dto_1.UserDto }),
    (0, swagger_1.ApiOkResponse)({
        description: '유저 목록 획득 성공',
        type: response_common_dto_1.ResultSuccessResponse,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('sign-up'),
    (0, swagger_1.ApiOperation)({ summary: '회원가입 API', description: 'true false 반환' }),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.SignupUserDto }),
    (0, swagger_1.ApiOkResponse)({
        description: '회원가입 성공',
        type: response_common_dto_1.BaseSuccessResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.SignupUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_local_guard_1.LocalAuthGuard),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('sign-in'),
    (0, swagger_1.ApiOperation)({
        summary: '유저 로그인',
        description: '유저가 로그인하는 api입니다.',
    }),
    (0, swagger_1.ApiBody)({ type: login_user_dto_1.LoginUserDto }),
    (0, swagger_1.ApiOkResponse)({ description: '로그인 성공', type: login_user_dto_1.LoginUserResponseDto }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_user_dto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '유저 아이디 중복 확인',
        description: '유저 아이디 중복확인 api.',
    }),
    (0, common_1.Post)('duplicateCheck'),
    (0, swagger_1.ApiOkResponse)({ description: '중복확인 성공', type: response_common_dto_1.BaseSuccessResponse }),
    (0, swagger_1.ApiBody)({ type: duplicateCheck_userId_dto_1.duplicateCheckUserId }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checkUserDuplicate", null);
__decorate([
    (0, common_1.UseGuards)(auth_jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({
        summary: '토큰 검증',
        description: '토큰 검증 api.',
    }),
    (0, swagger_1.ApiOkResponse)({ description: '검증 성공', type: login_user_dto_1.LoginUserResponseDto }),
    (0, common_1.Get)('tokenCheck'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "tokenCheck", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('User API'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthsService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map