"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterService = void 0;
const common_1 = require("@nestjs/common");
let SemesterService = class SemesterService {
    create(createSemesterDto) {
        return 'This action adds a new semester';
    }
    findAll() {
        return `This action returns all semester`;
    }
    findOne(id) {
        return `This action returns a #${id} semester`;
    }
    update(id, updateSemesterDto) {
        return `This action updates a #${id} semester`;
    }
    remove(id) {
        return `This action removes a #${id} semester`;
    }
};
SemesterService = __decorate([
    (0, common_1.Injectable)()
], SemesterService);
exports.SemesterService = SemesterService;
//# sourceMappingURL=semester.service.js.map