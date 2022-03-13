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
exports.LocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(AuthService) {
        super({ usernameField: 'id' });
        this.AuthService = AuthService;
    }
    async validate(id, password) {
        const user = await this.AuthService.validateUser(id, password);
        if (!user)
            throw new response_common_dto_1.ThrowFailResponse('아이디와 비밀번호를 다시 입력해주세요.');
        else if (user === 'secession')
            throw new response_common_dto_1.ThrowFailResponse('탈퇴한 회원입니다.');
        return user;
    }
};
LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthsService])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=auth.local.strategy.js.map