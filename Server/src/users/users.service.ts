import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseResponse } from 'src/common/dto/response-common.dto';

//미완성
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private connection: Connection,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const user = new User();
    const queryRunner = this.connection.createQueryRunner();
    user.studentId = createUserDto.studentId;
    user.name = createUserDto.name;
    user.phoneNumber = createUserDto.phoneNumber;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    await queryRunner.connect();
    try {
      await queryRunner.manager.save(user);
      return true;
    } catch (error) {
      console.log(error);
    } finally {
      await queryRunner.release();
    }
    await this.userRepository.save(user);
    return BaseResponse;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
