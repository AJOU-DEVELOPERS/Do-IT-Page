import { ApiProperty } from '@nestjs/swagger';
import { object } from 'joi';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { Department } from '../entities/department.entity';
export class GetDepartmentResponseDto extends BaseSuccessResponse {
  constructor(departments: Department[]) {
    super();
    this.res.departments = departments;
  }
  @ApiProperty({
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: '에러 혹은 응답에 대한 메시지',
        example: 'true',
      },
      departments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: '에러 혹은 응답에 대한 메시지',
              example: 'true',
            },
            departmentIdx: {
              type: 'integer',
              description: 'pk',
              example: 2,
            },
            name: {
              type: 'string',
              description: '학과명',
              example: '미디어학과',
            },
          },
        },
      },
    },
  })
  res: any;
}
