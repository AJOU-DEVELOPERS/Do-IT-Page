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
exports.ClubUser = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const semester_entity_1 = require("../../semester/entities/semester.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let ClubUser = class ClubUser extends typeorm_1.BaseEntity {
    static async findClubUserList() {
        const result = await this.createQueryBuilder('cu')
            .select([
            'cu.clubUserIdx as clubUserIdx',
            'cu.isPay as isPay',
            'cu.createdAt as createdAt',
            'u.userIdx as userIdx',
            'u.id as id',
            'u.studentId as studentId',
            'u.name as name',
            'u.phoneNumber as phoneNumber',
            'u.status as status',
        ])
            .leftJoin('cu.user', 'u')
            .where('cu.status = "N"')
            .getRawMany();
        return result;
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '동아리 회원 인덱스',
        example: 2,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClubUser.prototype, "clubUserIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 인덱스',
        example: 2,
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ClubUser.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '학기 인덱스',
        example: 2,
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ClubUser.prototype, "semesterIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회비 납부 여부 ( 0 : 미납 , 1 : 수납 )',
        example: 0,
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ClubUser.prototype, "isPay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClubUser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], ClubUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], ClubUser.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => user_entity_1.User, (_type) => _type.clubs),
    (0, typeorm_1.JoinColumn)({ name: 'userIdx', referencedColumnName: 'userIdx' }),
    __metadata("design:type", user_entity_1.User)
], ClubUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => semester_entity_1.Semester, (_type) => _type.clubs),
    (0, typeorm_1.JoinColumn)({ name: 'semesterIdx', referencedColumnName: 'semesterIdx' }),
    __metadata("design:type", semester_entity_1.Semester)
], ClubUser.prototype, "semester", void 0);
ClubUser = __decorate([
    (0, typeorm_1.Entity)('ClubUser')
], ClubUser);
exports.ClubUser = ClubUser;
//# sourceMappingURL=club.entity.js.map