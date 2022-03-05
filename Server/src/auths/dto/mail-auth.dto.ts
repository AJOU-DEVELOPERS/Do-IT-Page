import { Length, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { string } from 'joi';
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
  @IsString()
  @Length(6, 6)
  @ApiProperty({
    description: '인증 번호 6자리',
    example: '295135',
  })
  authNum: string;
}
export class SendMailResponseDto extends BaseSuccessResponse {
  constructor(cacheKey: string) {
    super();
    this.res.cacheKey = cacheKey;
  }
  @ApiProperty({
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: '에러 혹은 응답에 대한 메시지',
        example: 'true',
      },
      cacheKey: {
        type: 'string',
        description: '해시키 6자리',
        example: 'SDK2M3',
      },
    },
  })
  res: any;
}
