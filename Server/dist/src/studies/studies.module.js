"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudiesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const study_entity_1 = require("./entity/study.entity");
const studies_controller_1 = require("./studies.controller");
const studies_service_1 = require("./studies.service");
let StudiesModule = class StudiesModule {
};
StudiesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                study_entity_1.Study,
                user_entity_1.UserStudy,
                user_entity_1.User
            ])
        ],
        controllers: [studies_controller_1.StudiesController],
        providers: [studies_service_1.StudiesService]
    })
], StudiesModule);
exports.StudiesModule = StudiesModule;
//# sourceMappingURL=studies.module.js.map