import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { BaseFailResponse } from 'src/commons/dto/response-common.dto';
import { Repository, Connection } from 'typeorm';
import { Department } from './entities/department.entity';
import { GetDepartmentResponseDto } from './dto/get-department.dto';
export declare class DepartmentsService {
    private departmentRepository;
    private connection;
    constructor(departmentRepository: Repository<Department>, connection: Connection);
    create(createDepartmentDto: CreateDepartmentDto): string;
    findAll(): Promise<BaseFailResponse | GetDepartmentResponseDto>;
    findOne(id: number): string;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: number): string;
}
