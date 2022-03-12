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
  @IsString()
  @ApiProperty({
    description: '유저 아이디',
    example: 'kyi9592',
  })
  id: string;
  @ApiProperty({
    description: '유저 비밀번호',
    example: 'ASDJ123sa',
  })
  @IsString()
  password: string;
}
