import { BaseFailResponse, BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { Connection } from 'typeorm';
import { GetClubUserListResponse } from './dto/get-clubUser.dto';
export declare class ClubService {
    private readonly connection;
    constructor(connection: Connection);
    acceptClub(clubUserIdx: number): Promise<BaseSuccessResponse>;
    refuseClub(clubIdx: number): Promise<BaseSuccessResponse>;
    findClubList(): Promise<BaseFailResponse | GetClubUserListResponse>;
    create(userIdx: number): Promise<BaseSuccessResponse>;
}
