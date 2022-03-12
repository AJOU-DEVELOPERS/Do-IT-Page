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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSocial = exports.UserProject = exports.UserStudy = exports.UserDepartment = exports.User = void 0;
const department_entity_1 = require("../../departments/entities/department.entity");
const study_entity_1 = require("../../studies/entity/study.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const swagger_1 = require("@nestjs/swagger");
const project_entity_1 = require("../../projects/entity/project.entity");
const reservation_entity_1 = require("../../reservation/entitiy/reservation.entity");
const response_common_dto_1 = require("../../commons/dto/response-common.dto");
const class_validator_1 = require("class-validator");
const club_entity_1 = require("../../club/entities/club.entity");
let User = User_1 = class User extends typeorm_1.BaseEntity {
    async hashPassword() {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        }
        catch (error) {
            console.log(error);
            throw new response_common_dto_1.ThrowFailResponse('회원가입에 실패하였습니다.');
        }
    }
    async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
    static async findByLogin(id, password) {
        const user = await User_1.findOne({ id });
        if (!user || !(await bcrypt.compare(password, user.password)))
            throw new response_common_dto_1.ThrowFailResponse('아이디와 비밀번호를 다시 입력해주세요.');
        return user;
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 인덱스',
        example: 2,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "userIdx", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: '유저 아이디',
        example: 'kyi9592',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: '유저 비밀번호',
        example: 'ASDJ123sa',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.Min)(9),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        description: '학번',
        example: '201823815',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "studentId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(5),
    (0, swagger_1.ApiProperty)({
        description: '유저 이름',
        example: '곽영일',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.MinLength)(11),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: '유저 핸드폰 번호',
        example: '01012345678',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: '유저 이메일',
        example: 'kyi9592@ajou.ac.kr',
    }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserDepartment, (userDepartments) => userDepartments.user),
    __metadata("design:type", Array)
], User.prototype, "userDepartments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserSocial, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "userSocials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserStudy, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "userStudies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserProject, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "userProjects", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => reservation_entity_1.Reservation, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "reservations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => club_entity_1.ClubUser, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "clubs", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = User_1 = __decorate([
    (0, typeorm_1.Entity)('User')
], User);
exports.User = User;
let UserDepartment = class UserDepartment extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserDepartment.prototype, "userDepartmentIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserDepartment.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserDepartment.prototype, "departmentIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserDepartment.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, (user) => user.userDepartments),
    (0, typeorm_1.JoinColumn)({ name: 'userIdx', referencedColumnName: 'userIdx' }),
    __metadata("design:type", User)
], UserDepartment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.userDepartments),
    (0, typeorm_1.JoinColumn)({ name: 'departmentIdx', referencedColumnName: 'departmentIdx' }),
    __metadata("design:type", department_entity_1.Department)
], UserDepartment.prototype, "department", void 0);
UserDepartment = __decorate([
    (0, typeorm_1.Entity)()
], UserDepartment);
exports.UserDepartment = UserDepartment;
let UserStudy = class UserStudy extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserStudy.prototype, "userStudyIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserStudy.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserStudy.prototype, "studyIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        default: 'waiting',
    }),
    __metadata("design:type", String)
], UserStudy.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, (user) => user.userStudies),
    (0, typeorm_1.JoinColumn)({ name: 'userIdx', referencedColumnName: 'userIdx' }),
    __metadata("design:type", User)
], UserStudy.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => study_entity_1.Study, (study) => study.userStudies),
    (0, typeorm_1.JoinColumn)({ name: 'studyIdx', referencedColumnName: 'studyIdx' }),
    __metadata("design:type", study_entity_1.Study)
], UserStudy.prototype, "study", void 0);
UserStudy = __decorate([
    (0, typeorm_1.Entity)('UserStudy')
], UserStudy);
exports.UserStudy = UserStudy;
let UserProject = class UserProject extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserProject.prototype, "userProjectIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserProject.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserProject.prototype, "projectIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        default: 'waiting',
    }),
    __metadata("design:type", String)
], UserProject.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, (user) => user.userProjects),
    (0, typeorm_1.JoinColumn)({ name: 'userIdx', referencedColumnName: 'userIdx' }),
    __metadata("design:type", User)
], UserProject.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, (project) => project.userProjects),
    (0, typeorm_1.JoinColumn)({ name: 'projectIdx', referencedColumnName: 'projectIdx' }),
    __metadata("design:type", project_entity_1.Project)
], UserProject.prototype, "project", void 0);
UserProject = __decorate([
    (0, typeorm_1.Entity)('UserProject')
], UserProject);
exports.UserProject = UserProject;
let UserSocial = class UserSocial extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserSocial.prototype, "userSocialIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserSocial.prototype, "userIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => User, (_type) => _type.userSocials),
    __metadata("design:type", User)
], UserSocial.prototype, "user", void 0);
UserSocial = __decorate([
    (0, typeorm_1.Entity)()
], UserSocial);
exports.UserSocial = UserSocial;
//# sourceMappingURL=user.entity.js.map