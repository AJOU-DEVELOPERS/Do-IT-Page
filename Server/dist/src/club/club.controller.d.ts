import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { ClubService } from './club.service';
import { GetClubUserListResponse } from './dto/get-clubUser.dto';
export declare class ClubController {
    private readonly clubService;
    constructor(clubService: ClubService);
    create(req: any): Promise<BaseSuccessResponse>;
    accept(req: any, param: any): Promise<BaseSuccessResponse>;
    refuse(req: any, param: any): Promise<BaseSuccessResponse>;
    findAll(): Promise<import("src/commons/dto/response-common.dto").BaseFailResponse | GetClubUserListResponse>;
}
