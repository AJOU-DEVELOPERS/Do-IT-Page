import { SignupUserDto } from './dto/create-user.dto';
import { Repository, Connection } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseSuccessResponse, ResultSuccessResponse, BaseFailResponse } from 'src/commons/dto/response-common.dto';
import { AuthsService } from 'src/auths/auth.service';
export declare class UsersService {
    private userRepository;
    private connection;
    private readonly authsService;
    constructor(userRepository: Repository<User>, connection: Connection, authsService: AuthsService);
    createUser(createUserDto: SignupUserDto): Promise<BaseSuccessResponse>;
    findById(id: string): Promise<BaseSuccessResponse>;
    findAll(): Promise<BaseFailResponse | ResultSuccessResponse>;
}
