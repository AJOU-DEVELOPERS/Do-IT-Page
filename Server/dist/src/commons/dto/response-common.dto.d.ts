import { HttpException } from '@nestjs/common';
export declare class BaseSuccessResponse {
    isSuccess: boolean;
    code: number;
    res: any;
    constructor(message?: boolean | string);
    setMessage(message?: boolean | string): void;
}
export declare class ResultSuccessResponse extends BaseSuccessResponse {
    res: any;
    constructor(res: any);
}
export declare class BaseFailResponse extends BaseSuccessResponse {
    constructor(message?: string);
}
export declare class ThrowFailResponse extends HttpException {
    constructor(message: string);
}
