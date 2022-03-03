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
import { SignupUserDepartmentDto } from './create-user.dto';

export class UserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 아이디',
    example: 'kyi9592',
  })
  id: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(5)
  @ApiProperty({
    description: '유저 이름',
    example: '곽영일',
  })
  name: string;
  @Min(9)
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: '학번',
    example: '201823815',
  })
  studentId: number;
  @MinLength(11)
  @IsNotEmpty()
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
