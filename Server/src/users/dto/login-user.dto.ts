import {
  IsInt,
  Length,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsArray,
  isArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsEmail()
  @ApiProperty({
    description: '유저 이메일',
    example: 'kyi9592@ajou.ac.kr',
  })
  email: string;
  @ApiProperty({
    description: '유저 비밀번호',
    example: 'ASDJ123sa',
  })
  @IsString()
  password: string;
}
