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

export class BaseSuccessResponse {
  @IsBoolean()
  @ApiProperty({
    description: '성공 여부',
    example: 'true',
  })
  isSuccess: boolean;
  @IsInt()
  @ApiProperty({
    description: '응답 코드',
    example: 200,
  })
  code: number;

  constructor(isSuccess = true, code = 200) {
    this.isSuccess = isSuccess;
    this.code = code;
  }
}

export class ResultSuccessResponse extends BaseSuccessResponse {
  constructor(res: any) {
    super();
    res = res;
  }
  @ApiProperty()
  result: any;
}

export class BaseFailResponse extends BaseSuccessResponse {
  constructor(error: String = '실패') {
    super();
    this.isSuccess = false;
    this.code = 400;
    error = error;
  }
}

export class ThrowFailResponse extends HttpException {
  constructor(error: string) {
    super(
      {
        isSuccess: false,
        code: HttpStatus.BAD_REQUEST,
        error: error,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
