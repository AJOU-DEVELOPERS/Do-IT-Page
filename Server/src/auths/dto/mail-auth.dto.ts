import {
  IsInt,
  Length,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendMailDto {
  @IsEmail()
  @ApiProperty({
    description: '유저 이메일',
    example: 'kyi9592@ajou.ac.kr',
  })
  email: string;
}
export class VerifyMailDto {
  @IsString()
  @Length(6, 6)
  @ApiProperty({
    description: '해시 키 6자리',
    example: 'kgKD23',
  })
  cacheKey: string;
  @Length(6, 6)
  @IsInt()
  @ApiProperty({
    description: '인증 번호 6자리',
    example: '295135',
  })
  authNum: number;
}
