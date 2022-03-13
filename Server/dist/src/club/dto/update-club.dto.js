"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClubDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_club_dto_1 = require("./create-club.dto");
class UpdateClubDto extends (0, swagger_1.PartialType)(create_club_dto_1.CreateClubDto) {
}
exports.UpdateClubDto = UpdateClubDto;
//# sourceMappingURL=update-club.dto.js.map