import { User } from '../entities/user.entity';
import { Department } from 'src/departments/entities/department.entity';
export declare class SignupUserDto extends User {
    constructor();
    department: SignupUserDepartmentDto[];
}
export declare class SignupUserDepartmentDto extends Department {
    constructor();
    sort: string;
}
