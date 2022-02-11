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
exports.UserSocial = exports.UserDepartment = exports.UserTechStack = exports.Department = exports.TechStack = exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
let User = class User extends typeorm_1.BaseEntity {
    async hashPassword() {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserTechStack, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "userTechStacks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserDepartment, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "userDepartments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserSocial, (_type) => _type.user),
    __metadata("design:type", Array)
], User.prototype, "userSocials", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)('User')
], User);
exports.User = User;
let TechStack = class TechStack extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TechStack.prototype, "techStackIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TechStack.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserTechStack, (_type) => _type.techStack),
    __metadata("design:type", Array)
], TechStack.prototype, "userTechStacks", void 0);
TechStack = __decorate([
    (0, typeorm_1.Entity)()
], TechStack);
exports.TechStack = TechStack;
let Department = class Department extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Department.prototype, "departmentIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => UserDepartment, (_type) => _type.department),
    __metadata("design:type", Array)
], Department.prototype, "userDepartments", void 0);
Department = __decorate([
    (0, typeorm_1.Entity)()
], Department);
exports.Department = Department;
let UserTechStack = class UserTechStack extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserTechStack.prototype, "userTechStack", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTechStack.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTechStack.prototype, "techStackIdx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => User, (_type) => _type.userTechStacks),
    __metadata("design:type", User)
], UserTechStack.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => TechStack, (_type) => _type.userTechStacks),
    __metadata("design:type", TechStack)
], UserTechStack.prototype, "techStack", void 0);
UserTechStack = __decorate([
    (0, typeorm_1.Entity)()
], UserTechStack);
exports.UserTechStack = UserTechStack;
let UserDepartment = class UserDepartment extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserDepartment.prototype, "userDepartmentIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserDepartment.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserDepartment.prototype, "departmentIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserDepartment.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => User, (_type) => _type.userDepartments),
    __metadata("design:type", User)
], UserDepartment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => Department, (_type) => _type.userDepartments),
    __metadata("design:type", Department)
], UserDepartment.prototype, "department", void 0);
UserDepartment = __decorate([
    (0, typeorm_1.Entity)()
], UserDepartment);
exports.UserDepartment = UserDepartment;
let UserSocial = class UserSocial extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserSocial.prototype, "userSocialIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserSocial.prototype, "userIdx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSocial.prototype, "createdAt", void 0);
__decorate([
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