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
exports.LoginUserResponseDto = exports.LoginUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../../commons/dto/response-common.dto");
class LoginUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '유저 아이디',
        example: 'kyi9592',
    }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 비밀번호',
        example: 'ASDJ123sa',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
exports.LoginUserDto = LoginUserDto;
class LoginUserResponseDto extends response_common_dto_1.BaseSuccessResponse {
    constructor(user) {
        super();
        this.res.userInfo = user;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: '에러 혹은 응답에 대한 메시지',
                example: 'true',
            },
            userInfo: {
                type: 'object',
                properties: {
                    userId: {
                        type: 'integer',
                        description: '유저 pk',
                        example: 2,
                    },
                    userName: {
                        type: 'string',
                        description: '유저 이름',
                        example: '아무무',
                    },
                },
            },
        },
    }),
    __metadata("design:type", Object)
], LoginUserResponseDto.prototype, "res", void 0);
exports.LoginUserResponseDto = LoginUserResponseDto;
//# sourceMappingURL=login-user.dto.js.map