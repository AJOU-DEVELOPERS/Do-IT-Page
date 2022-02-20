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
  isNotEmpty
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { extend, object } from 'joi';

// 회원가입 Request body data
export class SignupUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 아이디',
    example: 'kyi9592',
  })
  id: number;
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(5)
  @ApiProperty({
    description: '유저 이름',
    example: '곽영일',
  })
  name: string;
  @IsNotEmpty()
  @IsInt()
  @Length(9, 9)
  @ApiProperty({
    description: '학번',
    example: '201823815',
  })
  studentId: number;
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 비밀번호',
    example: 'ASDJ123sa',
  })
  password: string;
  @IsNotEmpty()
  @Length(11, 11)
  @ApiProperty({
    description: '유저 핸드폰 번호',
    example: '01012345678',
  })
  phoneNumber: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: '유저 이메일',
    example: 'kyi9592@ajou.ac.kr',
  })
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ isArray: true, type: () => [SignupUserDepartmentDto] })
  department: SignupUserDepartmentDto[];
}
export class Department {
  @IsInt()
  @ApiProperty({
    description: '학과 인덱스',
    example: 1,
  })
  departmentIdx: number;
  @IsString()
  @ApiProperty({
    description: '학과 이름',
    example: '미디어학과',
  })
  name: string;
  userDepartments: any;
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
