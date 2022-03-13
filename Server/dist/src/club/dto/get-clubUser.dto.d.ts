import { User } from '../../users/entities/user.entity';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
declare const ClubUserData_base: import("@nestjs/common").Type<Pick<User, "userIdx" | "status" | "id" | "studentId" | "name" | "phoneNumber">>;
export declare class ClubUserData extends ClubUserData_base {
    clubUserIdx: number;
    isPay: number;
    createdAt: string;
}
export declare class ClubUserResData {
    message: string;
    clubUserList: ClubUserData[];
}
export declare class GetClubUserListResponse extends BaseSuccessResponse {
    constructor(clubUserList: ClubUserData[]);
    res: any;
}
export {};
