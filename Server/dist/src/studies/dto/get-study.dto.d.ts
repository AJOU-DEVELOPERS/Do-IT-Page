import { BaseSuccessResponse } from "src/commons/dto/response-common.dto";
import { Study } from "../entity/study.entity";
export declare class GetStudiesResponseDto extends BaseSuccessResponse {
    constructor(studies: Study[]);
    res: any;
}
export declare class GetStudyResponseDto extends BaseSuccessResponse {
    constructor(study: Study[]);
    res: any;
}
