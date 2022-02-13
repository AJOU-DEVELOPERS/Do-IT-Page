import { SignupUserDto } from './dto/create-user.dto';
import { Repository, Connection } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
export declare class UsersService {
    private userRepository;
    private connection;
    constructor(userRepository: Repository<User>, connection: Connection);
    createUser(createUserDto: SignupUserDto): Promise<BaseSuccessResponse>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
