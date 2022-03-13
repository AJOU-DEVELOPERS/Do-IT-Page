"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterModule = void 0;
const common_1 = require("@nestjs/common");
const semester_service_1 = require("./semester.service");
const semester_controller_1 = require("./semester.controller");
const semester_entity_1 = require("./entities/semester.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SemesterModule = class SemesterModule {
};
SemesterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([semester_entity_1.Semester])],
        controllers: [semester_controller_1.SemesterController],
        providers: [semester_service_1.SemesterService],
    })
], SemesterModule);
exports.SemesterModule = SemesterModule;
//# sourceMappingURL=semester.module.js.map