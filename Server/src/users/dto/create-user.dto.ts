import {
  IsInt,
  Length,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/common/dto/response-common.dto';
import { extend } from 'joi';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(5)
  @ApiProperty({
    description: '유저 이름',
    example: '곽영일',
  })
  name: string;
  @IsInt()
  @Length(9, 9)
  @ApiProperty({
    description: '학번',
    example: '201823815',
  })
  studentId: number;
  @ApiProperty({
    description: '유저 비밀번호',
    example: 'ASDJ123sa',
  })
  password: string;

  @Length(11, 11)
  @ApiProperty({
    description: '유저 핸드폰 번호',
    example: '01012345678',
  })
  phoneNumber: string;
  @IsEmail()
  @ApiProperty({
    description: '유저 이메일',
    example: 'kyi9592@ajou.ac.kr',
  })
  email: string;
  @IsArray()
  @ApiProperty()
  department: Department[];
}
export class Department {
  @IsString()
  @ApiProperty({
    description: '학과 이름',
    example: '미디어학과',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: '전공 여부 ',
    example: 'major : 전공, pluralMajor : 복수전공, minor : 부전공',
  })
  sort: string;
}
export class createUserResponse extends BaseResponse {
  constructor() {
    super();
  }
}
