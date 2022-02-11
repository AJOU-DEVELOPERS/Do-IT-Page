import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { BaseResponse } from 'src/common/dto/response-common.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<true | typeof BaseResponse>;
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
