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
exports.ProjectTechStack = exports.Project = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Project = class Project extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Project.prototype, "projectIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: "text"
    }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Project.prototype, "totalHeadcount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Project.prototype, "leaderName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        default: 'waiting'
    }),
    __metadata("design:type", String)
], Project.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Project.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Project.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => user_entity_1.UserProject, (_type) => _type.project),
    __metadata("design:type", Array)
], Project.prototype, "userProjects", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => ProjectTechStack, (_type) => _type.project),
    __metadata("design:type", Array)
], Project.prototype, "projectTechStacks", void 0);
Project = __decorate([
    (0, typeorm_1.Entity)('Project')
], Project);
exports.Project = Project;
let ProjectTechStack = class ProjectTechStack extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'techStackIdx' }),
    __metadata("design:type", Number)
], ProjectTechStack.prototype, "projectTechStackIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProjectTechStack.prototype, "projectIdx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectTechStack.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Project, (project) => project.projectTechStacks),
    (0, typeorm_1.JoinColumn)({ name: 'projectIdx', referencedColumnName: 'projectIdx' }),
    __metadata("design:type", Project)
], ProjectTechStack.prototype, "project", void 0);
ProjectTechStack = __decorate([
    (0, typeorm_1.Entity)({ name: 'TechStack' })
], ProjectTechStack);
exports.ProjectTechStack = ProjectTechStack;
//# sourceMappingURL=project.entity.js.map