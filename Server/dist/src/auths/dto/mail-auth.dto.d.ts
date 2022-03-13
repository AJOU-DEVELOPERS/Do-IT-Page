import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
export declare class SendMailDto {
    email: string;
}
export declare class VerifyMailDto {
    cacheKey: string;
    authNum: string;
}
export declare class SendMailResponseDto extends BaseSuccessResponse {
    constructor(cacheKey: string);
    res: any;
}
