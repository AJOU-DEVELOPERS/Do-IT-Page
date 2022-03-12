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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const mail_auth_dto_1 = require("./dto/mail-auth.dto");
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const mail_auth_dto_2 = require("./dto/mail-auth.dto");
let AuthController = class AuthController {
    constructor(authsService) {
        this.authsService = authsService;
    }
    async sendMail(sendMailDto) {
        return await this.authsService.sendMail(sendMailDto);
    }
    async verifyMail(verifyMailDto) {
        return await this.authsService.verifyMail(verifyMailDto);
    }
};
__decorate([
    (0, common_1.Post)('req-mail'),
    (0, swagger_1.ApiOperation)({
        summary: '메일 발송 요청 API',
        description: 'cacheKey 반환',
    }),
    (0, swagger_1.ApiOkResponse)({ description: '메일 발송 성공', type: mail_auth_dto_2.SendMailResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mail_auth_dto_1.SendMailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Post)('verify-mail'),
    (0, swagger_1.ApiOperation)({
        summary: '메일 인증번호 확인 API',
        description: 'true false 반환',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '메일 인증 확인 성공',
        type: response_common_dto_1.BaseSuccessResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mail_auth_dto_1.VerifyMailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyMail", null);
AuthController = __decorate([
    (0, common_1.Controller)('auths'),
    (0, swagger_1.ApiTags)('Auth API'),
    __metadata("design:paramtypes", [auth_service_1.AuthsService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map