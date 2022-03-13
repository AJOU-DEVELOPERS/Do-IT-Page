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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const department_entity_1 = require("./entities/department.entity");
const get_department_dto_1 = require("./dto/get-department.dto");
let DepartmentsService = class DepartmentsService {
    constructor(departmentRepository, connection) {
        this.departmentRepository = departmentRepository;
        this.connection = connection;
    }
    create(createDepartmentDto) {
        return 'This action adds a new department';
    }
    async findAll() {
        try {
            const departmentList = await department_entity_1.Department.find();
            return new get_department_dto_1.GetDepartmentResponseDto(departmentList);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('학과 목록을 불러오는데 실패하였습니다.');
        }
    }
    findOne(id) {
        return `This action returns a #${id} department`;
    }
    update(id, updateDepartmentDto) {
        return `This action updates a #${id} department`;
    }
    remove(id) {
        return `This action removes a #${id} department`;
    }
};
DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Connection])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map