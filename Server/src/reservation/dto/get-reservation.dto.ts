import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResponse } from "src/commons/dto/response-common.dto";

export class GetResesrvationResponseDTO extends BaseSuccessResponse{
    constructor(res: any) {
        super();
        this.res = res;
    }
    @ApiProperty()
    res: any;
}