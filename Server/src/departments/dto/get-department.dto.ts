import { ApiProperty } from '@nestjs/swagger';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { Department } from '../entities/department.entity';
export class GetDepartmentResponseDto extends BaseSuccessResponse {
  @ApiProperty({ type: () => Department })
  res: Department;
  constructor() {
    super();
  }
}
