import { User } from '../entities/user.entity';
import { SignupUserDepartmentDto } from './create-user.dto';
export declare class UserDto extends User {
    constructor();
    department: SignupUserDepartmentDto[];
}
