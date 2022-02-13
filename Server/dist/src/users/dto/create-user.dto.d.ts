export declare class SignupUserDto {
    name: string;
    studentId: number;
    password: string;
    phoneNumber: string;
    email: string;
    department: SignupUserDepartmentDto[];
}
export declare class Department {
    departmentIdx: number;
    name: string;
    userDepartments: any;
}
export declare class SignupUserDepartmentDto extends Department {
    constructor();
    sort: string;
}
