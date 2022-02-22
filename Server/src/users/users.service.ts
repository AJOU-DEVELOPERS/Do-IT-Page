import {
  Inject,
  Injectable,
  CACHE_MANAGER,
  BadRequestException,
} from '@nestjs/common';
import { SignupUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { User } from './entities/user.entity';
import {
  BaseSuccessResponse,
  ResultSuccessResponse,
  BaseFailResponse,
} from 'src/commons/dto/response-common.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthsService } from 'src/auths/auth.service';
import { compare } from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private connection: Connection,
    private readonly authsService: AuthsService,
  ) {}
  async createUser(createUserDto: SignupUserDto) {
    const user = new User();
    const queryRunner = this.connection.createQueryRunner();
    user.studentId = createUserDto.studentId;
    user.name = createUserDto.name;
    user.phoneNumber = createUserDto.phoneNumber;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    user.id = createUserDto.id;
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const emailInfo = await queryRunner.manager.findOne(User, {
        email: user.email,
      });
      const idInfo = await queryRunner.manager.findOne(User, {
        id: user.id,
      });
      if (emailInfo || idInfo)
        return new BaseFailResponse('이미 존재하는 계정입니다.');
      await queryRunner.manager.save(user);
      await queryRunner.commitTransaction();
      return new BaseSuccessResponse();
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
      return new BaseFailResponse('회원가입에 실패하였습니다.');
    } finally {
      await queryRunner.release();
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const userInfo = await User.findOne({ id: loginUserDto.id });
    if (!userInfo)
      return new BaseFailResponse('이미 존재하지 않는 이메일입니다.');
    if (!(await compare(loginUserDto.password, userInfo.password)))
      return new BaseFailResponse('비밀번호가 틀렸습니다.');
    return this.authsService.getCookieWithJwtToken(userInfo.userIdx);
  }
  async findById(id: string) {
    const user = await User.findOne({ where: id });
    if (user) return new BaseFailResponse('이미 존재하는 아이디입니다.');
    return new BaseSuccessResponse();
  }
  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // // update(id: number, updateUserDto: UpdateUserDto) {
  // //   return `This action updates a #${id} user`;
  // // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
