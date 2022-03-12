import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { GetDepartmentResponseDto } from './dto/get-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): string;
    findAll(): Promise<import("src/commons/dto/response-common.dto").BaseFailResponse | GetDepartmentResponseDto>;
    findOne(id: string): string;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: string): string;
}
