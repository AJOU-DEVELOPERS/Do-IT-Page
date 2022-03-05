import { BaseSuccessResponse } from "src/commons/dto/response-common.dto";
import { Study } from "../entity/study.entity";

export class GetStudiesResponseDto extends BaseSuccessResponse {
    constructor(studies: Study[]) {
        super();
        this.res.studies = studies;
    }
    res: any;
}

export class GetStudyResponseDto extends BaseSuccessResponse {
    constructor(study: Study[]) {
        super();
        this.res.study = study;
    }
    res: any;
}