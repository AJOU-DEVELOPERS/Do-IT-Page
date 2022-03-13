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
exports.AuthsService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const mail_auth_dto_1 = require("./dto/mail-auth.dto");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const user_entity_1 = require("../users/entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
let AuthsService = class AuthsService {
    constructor(mailerService, cacheManager, jwtService) {
        this.mailerService = mailerService;
        this.cacheManager = cacheManager;
        this.jwtService = jwtService;
    }
    async sendMail(SendMailDto) {
        try {
            let authNum = '';
            let cacheKey = '';
            const userInfo = await user_entity_1.User.findOne({ email: SendMailDto.email });
            if (userInfo)
                return new response_common_dto_1.BaseSuccessResponse('이미 존재하는 이메일입니다.');
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
            for (let i = 0; i < 6; i++) {
                authNum += Math.floor(Math.random() * 10);
                const rnum = Math.floor(Math.random() * chars.length);
                cacheKey += chars.substring(rnum, rnum + 1);
            }
            await this.mailerService.sendMail({
                to: SendMailDto.email,
                from: 'Do.IT.AJOU@gmail.com',
                subject: 'Do-It 인증 요청 메일입니다.',
                html: '6자리 인증 코드 : ' + `<b> ${authNum}</b>`,
            });
            await this.cacheManager.set(cacheKey, authNum, { ttl: 180 });
            return new mail_auth_dto_1.SendMailResponseDto(cacheKey);
        }
        catch (err) {
            console.log(err);
            return new response_common_dto_1.BaseFailResponse('메일 요청에 실패하였습니다.');
        }
    }
    async verifyMail(verifyMailDto) {
        const cacheValue = await this.cacheManager.get(verifyMailDto.cacheKey);
        if (cacheValue !== verifyMailDto.authNum)
            return new response_common_dto_1.BaseSuccessResponse('인증번호가 틀렸습니다.');
        return new response_common_dto_1.BaseSuccessResponse();
    }
    async getCookieWithJwtToken(userIdx, userName, status) {
        const payload = { userIdx, userName, status };
        const token = this.jwtService.sign(payload);
        return token;
    }
    async validateUser(id, password) {
        const userInfo = await user_entity_1.User.findByLogin(id, password);
        if (!userInfo)
            return null;
        else if (userInfo.status === 'Y')
            return 'secession';
        const result = {
            userIdx: userInfo.userIdx,
            userName: userInfo.name,
            status: userInfo.status,
        };
        return result;
    }
};
AuthsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [mailer_1.MailerService, Object, jwt_1.JwtService])
], AuthsService);
exports.AuthsService = AuthsService;
//# sourceMappingURL=auth.service.js.map