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
exports.SignupUserDepartmentDto = exports.SignupUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../entities/user.entity");
const department_entity_1 = require("../../departments/entities/department.entity");
class SignupUserDto extends user_entity_1.User {
    constructor() {
        super();
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ isArray: true, type: () => [SignupUserDepartmentDto] }),
    __metadata("design:type", Array)
], SignupUserDto.prototype, "department", void 0);
exports.SignupUserDto = SignupUserDto;
class SignupUserDepartmentDto extends department_entity_1.Department {
    constructor() {
        super();
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '전공 종류',
        example: 'major',
    }),
    __metadata("design:type", String)
], SignupUserDepartmentDto.prototype, "sort", void 0);
exports.SignupUserDepartmentDto = SignupUserDepartmentDto;
//# sourceMappingURL=create-user.dto.js.map