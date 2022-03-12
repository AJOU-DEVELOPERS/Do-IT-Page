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
exports.CreateStudyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStudyDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '스터디 이름',
        example: 'NestJS 기초 스터디'
    }),
    __metadata("design:type", String)
], CreateStudyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '스터디 설명',
        example: 'NestJS의 기본 동작 원리와 ... 을 공부합니다.'
    }),
    __metadata("design:type", String)
], CreateStudyDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        description: '스터디 총원',
        example: '5'
    }),
    __metadata("design:type", Number)
], CreateStudyDto.prototype, "totalHeadcount", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        description: '스터디장 유저 아이디',
        example: '2'
    }),
    __metadata("design:type", Number)
], CreateStudyDto.prototype, "leaderUserIdx", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '스터디장 이름',
        example: '이호용'
    }),
    __metadata("design:type", String)
], CreateStudyDto.prototype, "leaderName", void 0);
exports.CreateStudyDto = CreateStudyDto;
//# sourceMappingURL=create-study.dto.js.map