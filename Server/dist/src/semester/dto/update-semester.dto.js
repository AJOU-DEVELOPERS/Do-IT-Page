"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSemesterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_semester_dto_1 = require("./create-semester.dto");
class UpdateSemesterDto extends (0, swagger_1.PartialType)(create_semester_dto_1.CreateSemesterDto) {
}
exports.UpdateSemesterDto = UpdateSemesterDto;
//# sourceMappingURL=update-semester.dto.js.map