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
exports.createUserResponse = exports.Department = exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../../common/dto/response-common.dto");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(5),
    (0, swagger_1.ApiProperty)({
        description: '유저 이름',
        example: '곽영일',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Length)(9, 9),
    (0, swagger_1.ApiProperty)({
        description: '학번',
        example: '201823815',
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 비밀번호',
        example: 'ASDJ123sa',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.Length)(11, 11),
    (0, swagger_1.ApiProperty)({
        description: '유저 핸드폰 번호',
        example: '01012345678',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: '유저 이메일',
        example: 'kyi9592@ajou.ac.kr',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "department", void 0);
exports.CreateUserDto = CreateUserDto;
class Department {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '학과 이름',
        example: '미디어학과',
    }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '전공 여부 ',
        example: 'major : 전공, pluralMajor : 복수전공, minor : 부전공',
    }),
    __metadata("design:type", String)
], Department.prototype, "sort", void 0);
exports.Department = Department;
class createUserResponse extends response_common_dto_1.BaseResponse {
    constructor() {
        super();
    }
}
exports.createUserResponse = createUserResponse;
//# sourceMappingURL=create-user.dto.js.map