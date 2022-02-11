import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    userIdx: number;
    password: string;
    studentId: number;
    name: string;
    phoneNumber: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    userTechStacks: UserTechStack[];
    userDepartments: UserDepartment[];
    userSocials: UserSocial[];
    hashPassword(): Promise<void>;
}
export declare class TechStack extends BaseEntity {
    techStackIdx: number;
    name: string;
    userTechStacks: UserTechStack[];
}
export declare class Department extends BaseEntity {
    departmentIdx: number;
    name: string;
    userDepartments: UserDepartment[];
}
export declare class UserTechStack extends BaseEntity {
    userTechStack: number;
    userIdx: number;
    techStackIdx: number;
    user: User;
    techStack: TechStack;
}
export declare class UserDepartment extends BaseEntity {
    userDepartmentIdx: number;
    userIdx: number;
    departmentIdx: number;
    sort: string;
    user: User;
    department: Department;
}
export declare class UserSocial extends BaseEntity {
    userSocialIdx: number;
    userIdx: number;
    name: string;
    id: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    user: User;
}
