import { UsersService } from './users.service';
import { SignupUserDto } from './dto/create-user.dto';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: SignupUserDto): Promise<true | BaseSuccessResponse>;
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
