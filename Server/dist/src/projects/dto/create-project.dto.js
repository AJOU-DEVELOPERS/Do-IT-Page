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
exports.CreateProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjectDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '프로젝트명',
        example: 'Do-It 홈페이지 리뉴얼'
    }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '프로젝트 설명',
        example: 'Do-It 홈페이지 코드 리팩토링 및 구조 개선'
    }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: '프로젝트 총원',
        example: 5
    }),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "totalHeadcount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: '프로젝트 리더 유저 아이디 ',
        example: 3
    }),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "leaderUserIdx", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '프로젝트 리더 이름',
        example: '이호용'
    }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "leaderName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiProperty)({
        description: '프로젝트 기술스택',
        example: ['html', 'css', 'js']
    }),
    __metadata("design:type", Array)
], CreateProjectDto.prototype, "techStacks", void 0);
exports.CreateProjectDto = CreateProjectDto;
//# sourceMappingURL=create-project.dto.js.map