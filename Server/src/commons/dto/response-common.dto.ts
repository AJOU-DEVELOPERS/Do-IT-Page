import {
  IsInt,
  Length,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { getSupportInfo } from 'prettier';

export abstract class BaseResponse {
  @IsString()
  @ApiProperty({
    description: '성공 여부',
    example: 'true',
  })
  isSuccess: string;
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
}

export abstract class ResultResponse extends BaseResponse {
  constructor() {
    super();
  }
  @ApiProperty()
  result: any;
}
