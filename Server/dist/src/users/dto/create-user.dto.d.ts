import { BaseResponse } from 'src/common/dto/response-common.dto';
export declare class CreateUserDto {
    name: string;
    studentId: number;
    password: string;
    phoneNumber: string;
    email: string;
    department: Department[];
}
export declare class Department {
    name: string;
    sort: string;
}
export declare class createUserResponse extends BaseResponse {
    constructor();
}
