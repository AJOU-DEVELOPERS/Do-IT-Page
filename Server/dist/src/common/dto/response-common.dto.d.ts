export declare abstract class BaseResponse {
    isSuccess: string;
    code: number;
    message: string;
}
export declare abstract class ResultResponse extends BaseResponse {
    constructor();
    result: any;
}
