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
let AuthsService = class AuthsService {
    constructor(mailerService, cacheManager) {
        this.mailerService = mailerService;
        this.cacheManager = cacheManager;
    }
    async sendMail(SendMailDto) {
        try {
            let authNum = '';
            let cacheKey = '';
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
            for (let i = 0; i < 6; i++) {
                authNum += Math.floor(Math.random() * 10);
                const rnum = Math.floor(Math.random() * chars.length);
                cacheKey += chars.substring(rnum, rnum + 1);
            }
            const number = authNum;
            await this.mailerService.sendMail({
                to: SendMailDto.email,
                from: 'kyi9470812@gmail.com',
                subject: '이메일 인증 요청 메일입니다.',
                html: '6자리 인증 코드 : ' + `<b> ${authNum}</b>`,
            });
            await this.cacheManager.set(cacheKey, authNum, { ttl: 180 });
            return { cacheKey: cacheKey };
        }
        catch (err) {
            console.log(err);
        }
    }
    async verifyMail(verifyMailDto) {
        const cacheValue = await this.cacheManager.get(verifyMailDto.cacheKey);
        if (cacheValue !== verifyMailDto.authNum)
            return false;
        return true;
    }
};
AuthsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [mailer_1.MailerService, Object])
], AuthsService);
exports.AuthsService = AuthsService;
//# sourceMappingURL=auth.service.js.map