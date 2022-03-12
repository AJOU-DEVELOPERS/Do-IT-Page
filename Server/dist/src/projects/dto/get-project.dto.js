"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectResponseDto = exports.GetProjectsResponseDto = void 0;
const response_common_dto_1 = require("../../commons/dto/response-common.dto");
class GetProjectsResponseDto extends response_common_dto_1.BaseSuccessResponse {
    constructor(projects) {
        super();
        this.res.projects = projects;
    }
}
exports.GetProjectsResponseDto = GetProjectsResponseDto;
class GetProjectResponseDto extends response_common_dto_1.BaseSuccessResponse {
    constructor(project) {
        super();
        this.res.project = project;
    }
}
exports.GetProjectResponseDto = GetProjectResponseDto;
//# sourceMappingURL=get-project.dto.js.map