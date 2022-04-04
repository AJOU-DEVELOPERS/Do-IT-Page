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

export class UserDto extends User {
  constructor() {
    super();
  }
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: '학과 인덱스',
    example: 30,
  })
  departmentIdx: number;
}
