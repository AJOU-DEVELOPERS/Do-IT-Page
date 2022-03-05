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
import { ApiProperty, ApiHeader } from '@nestjs/swagger';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';

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

export class LoginUserResponseDto extends BaseSuccessResponse {
  constructor(user: object) {
    super();
    this.res.userInfo = user;
  }

  @ApiProperty({
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: '에러 혹은 응답에 대한 메시지',
        example: 'true',
      },
      userInfo: {
        type: 'object',
        properties: {
          userId: {
            type: 'integer',
            description: '유저 pk',
            example: 2,
          },
          userName: {
            type: 'string',
            description: '유저 이름',
            example: '아무무',
          },
        },
      },
    },
  })
  res: any;
}
