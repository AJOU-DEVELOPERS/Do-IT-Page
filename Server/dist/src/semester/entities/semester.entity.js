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
var Semester_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semester = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const club_entity_1 = require("../../club/entities/club.entity");
let Semester = Semester_1 = class Semester extends typeorm_1.BaseEntity {
    async findNowSemester() {
        return Semester_1.findOne({
            where: 'semesterStartDate <= NOW() and semesterEndDate >= NOW()',
        });
    }
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Semester.prototype, "semesterIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semester.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semester.prototype, "semester", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semester.prototype, "semesterStartDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semester.prototype, "semesterEndDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => club_entity_1.ClubUser, (_type) => _type.semester),
    __metadata("design:type", Array)
], Semester.prototype, "clubs", void 0);
Semester = Semester_1 = __decorate([
    (0, typeorm_1.Entity)('Semester')
], Semester);
exports.Semester = Semester;
//# sourceMappingURL=semester.entity.js.map