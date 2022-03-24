import { BaseSuccessResponse } from "src/commons/dto/response-common.dto";
import { UserStudy } from "../entities/user.entity";

export class GetUserStudyResponseDto extends BaseSuccessResponse {
    constructor(userStudy: UserStudy[]) {
        super();
        this.res.userStudy = userStudy;
    }
    res: any;
}
