import { UsersService } from './users.service';
import { SignupUserDto } from './dto/create-user.dto';
import { AuthsService } from 'src/auths/auth.service';
import { BaseSuccessResponse, ResultSuccessResponse } from 'src/commons/dto/response-common.dto';
import { LoginUserDto, LoginUserResponseDto } from './dto/login-user.dto';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    private readonly authsService;
    constructor(usersService: UsersService, authsService: AuthsService);
    getUsers(): Promise<import("src/commons/dto/response-common.dto").BaseFailResponse | ResultSuccessResponse>;
    create(createUserDto: SignupUserDto): Promise<BaseSuccessResponse>;
    logIn(req: any, loginUserDto: LoginUserDto, res: Response): Promise<LoginUserResponseDto>;
    checkUserDuplicate(id: string): Promise<BaseSuccessResponse>;
    tokenCheck(req: any): Promise<LoginUserResponseDto>;
}
