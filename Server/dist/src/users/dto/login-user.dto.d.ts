import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
export declare class LoginUserDto {
    id: string;
    password: string;
}
export declare class LoginUserResponseDto extends BaseSuccessResponse {
    constructor(user: object);
    res: any;
}
