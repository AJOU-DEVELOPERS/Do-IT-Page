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
  @IsString()
  @ApiProperty({
    description: '응답 메시지',
    example: '성공',
  })
  message: string;
  constructor(isSuccess = true, code = 200, message = '성공') {
    this.isSuccess = isSuccess;
    this.code = code;
    this.message = message;
  }
}

export class ResultSuccessResponse extends BaseSuccessResponse {
  constructor(result: any) {
    super();
    this.result = result;
  }
  @ApiProperty()
  result: any;
}

export class BaseFailResponse extends BaseSuccessResponse {
  constructor(message = '실패') {
    super();
    this.isSuccess = false;
    this.code = 400;
    this.message = message;
  }
}
