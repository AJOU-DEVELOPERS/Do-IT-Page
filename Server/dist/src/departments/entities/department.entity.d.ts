import { BaseEntity } from 'typeorm';
import { UserDepartment } from 'src/users/entities/user.entity';
export declare class Department extends BaseEntity {
    departmentIdx: number;
    name: string;
    userDepartments: UserDepartment[];
}
