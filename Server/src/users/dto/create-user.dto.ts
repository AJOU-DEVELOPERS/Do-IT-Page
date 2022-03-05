import {
  IsInt,
  Length,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsArray,
  isArray,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { extend, object } from 'joi';
import { User } from '../entities/user.entity';
import { Department } from 'src/departments/entities/department.entity';

// 회원가입 Request body data
export class SignupUserDto extends User {
  constructor() {
    super();
  }
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ isArray: true, type: () => [SignupUserDepartmentDto] })
  department: SignupUserDepartmentDto[];
}

// 회원가입 Request 학과 object data
export class SignupUserDepartmentDto extends Department {
  constructor() {
    super();
  }
  @IsString()
  @ApiProperty({
    description: '전공 종류',
    example: 'major',
  })
  sort: string;
}
