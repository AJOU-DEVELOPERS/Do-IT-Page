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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterController = void 0;
const common_1 = require("@nestjs/common");
const semester_service_1 = require("./semester.service");
const create_semester_dto_1 = require("./dto/create-semester.dto");
const update_semester_dto_1 = require("./dto/update-semester.dto");
let SemesterController = class SemesterController {
    constructor(semesterService) {
        this.semesterService = semesterService;
    }
    create(createSemesterDto) {
        return this.semesterService.create(createSemesterDto);
    }
    findAll() {
        return this.semesterService.findAll();
    }
    findOne(id) {
        return this.semesterService.findOne(+id);
    }
    update(id, updateSemesterDto) {
        return this.semesterService.update(+id, updateSemesterDto);
    }
    remove(id) {
        return this.semesterService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_semester_dto_1.CreateSemesterDto]),
    __metadata("design:returntype", void 0)
], SemesterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemesterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SemesterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_semester_dto_1.UpdateSemesterDto]),
    __metadata("design:returntype", void 0)
], SemesterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SemesterController.prototype, "remove", null);
SemesterController = __decorate([
    (0, common_1.Controller)('semester'),
    __metadata("design:paramtypes", [semester_service_1.SemesterService])
], SemesterController);
exports.SemesterController = SemesterController;
//# sourceMappingURL=semester.controller.js.map