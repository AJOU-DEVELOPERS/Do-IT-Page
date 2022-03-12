import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import {
  BaseSuccessResponse,
  ResultSuccessResponse,
  BaseFailResponse,
} from 'src/commons/dto/response-common.dto';
import { Repository, Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { GetDepartmentResponseDto } from './dto/get-department.dto';
@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
    private connection: Connection,
  ) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  async findAll() {
    try {
      const departmentList = await Department.find();

      return new GetDepartmentResponseDto(departmentList);
    } catch (error) {
      console.log(error);
      return new BaseFailResponse('학과 목록을 불러오는데 실패하였습니다.');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
