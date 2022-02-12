import { CreateUserDto } from './dto/create-user.dto';
import { Repository, Connection } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseResponse } from 'src/commons/dto/response-common.dto';
export declare class UsersService {
    private userRepository;
    private connection;
    constructor(userRepository: Repository<User>, connection: Connection);
    createUser(createUserDto: CreateUserDto): Promise<true | typeof BaseResponse>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
