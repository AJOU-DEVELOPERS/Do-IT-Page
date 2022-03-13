import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { Department } from '../entities/department.entity';
export declare class GetDepartmentResponseDto extends BaseSuccessResponse {
    constructor(departments: Department[]);
    res: any;
}
