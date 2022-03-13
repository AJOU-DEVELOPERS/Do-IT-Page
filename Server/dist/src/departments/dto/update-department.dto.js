"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepartmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_department_dto_1 = require("./create-department.dto");
class UpdateDepartmentDto extends (0, swagger_1.PartialType)(create_department_dto_1.CreateDepartmentDto) {
}
exports.UpdateDepartmentDto = UpdateDepartmentDto;
//# sourceMappingURL=update-department.dto.js.map