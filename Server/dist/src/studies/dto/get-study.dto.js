"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStudyResponseDto = exports.GetStudiesResponseDto = void 0;
const response_common_dto_1 = require("../../commons/dto/response-common.dto");
class GetStudiesResponseDto extends response_common_dto_1.BaseSuccessResponse {
    constructor(studies) {
        super();
        this.res.studies = studies;
    }
}
exports.GetStudiesResponseDto = GetStudiesResponseDto;
class GetStudyResponseDto extends response_common_dto_1.BaseSuccessResponse {
    constructor(study) {
        super();
        this.res.study = study;
    }
}
exports.GetStudyResponseDto = GetStudyResponseDto;
//# sourceMappingURL=get-study.dto.js.map