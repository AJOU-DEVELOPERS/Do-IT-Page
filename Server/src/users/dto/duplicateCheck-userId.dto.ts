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

export class duplicateCheckUserId {
  @IsString()
  @ApiProperty({
    description: '유저 아이디',
    example: 'kyi9592',
  })
  id: string;
}
