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
exports.VerifyMailDto = exports.SendMailDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SendMailDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: '유저 이메일',
        example: 'kyi9592@ajou.ac.kr',
    }),
    __metadata("design:type", String)
], SendMailDto.prototype, "email", void 0);
exports.SendMailDto = SendMailDto;
class VerifyMailDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 6),
    (0, swagger_1.ApiProperty)({
        description: '해시 키 6자리',
        example: 'kgKD23',
    }),
    __metadata("design:type", String)
], VerifyMailDto.prototype, "cacheKey", void 0);
__decorate([
    (0, class_validator_1.Length)(6, 6),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        description: '인증 번호 6자리',
        example: '295135',
    }),
    __metadata("design:type", Number)
], VerifyMailDto.prototype, "authNum", void 0);
exports.VerifyMailDto = VerifyMailDto;
//# sourceMappingURL=mail-auth.dto.js.map