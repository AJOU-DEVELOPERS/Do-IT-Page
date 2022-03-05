import {
  IsInt,
  Length,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { getSupportInfo } from 'prettier';
import { HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { object } from 'joi';

export class BaseSuccessResponse {
  @IsBoolean()
  @ApiProperty({
    description: '성공 여부 요청 에러, 데이터 베이스 에러 제외하고 모두 true',
    example: 'true',
  })
  isSuccess: boolean;
  @IsInt()
  @ApiProperty({
    description: '응답 코드',
    example: 200,
  })
  code: number;

  @ApiProperty({
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: '에러 혹은 응답에 대한 메시지',
        example: 'true',
      },
    },
  })
  res: any;

  constructor(message: boolean | string = true) {
    this.isSuccess = true;
    this.code = 200;
    this.res = {};
    this.res.message = message;
  }
  public setMessage(message: boolean | string = true) {
    this.res.message = message;
  }
}

export class ResultSuccessResponse extends BaseSuccessResponse {
  @ApiProperty()
  res: any;
  constructor(res: any) {
    super();
    this.res = res;
  }
}

export class BaseFailResponse extends BaseSuccessResponse {
  constructor(message: string = '실패') {
    super();
    this.isSuccess = false;
    this.code = 400;
    this.res.message = message;
  }
}

export class ThrowFailResponse extends HttpException {
  constructor(message: string) {
    super(
      {
        isSuccess: false,
        code: HttpStatus.BAD_REQUEST,
        res: {
          message: message,
        },
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
