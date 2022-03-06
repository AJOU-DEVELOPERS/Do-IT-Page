import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Min,
  IsInt,
  IsEmail,
  IsArray,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { SignupUserDepartmentDto } from './create-user.dto';

export class UserDto extends User {
  constructor() {
    super();
  }
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ isArray: false, type: () => [SignupUserDepartmentDto] })
  department: SignupUserDepartmentDto[];
}
