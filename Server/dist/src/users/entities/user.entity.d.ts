import { Department } from 'src/departments/entities/department.entity';
import { Study } from 'src/studies/entity/study.entity';
import { BaseEntity } from 'typeorm';
import { Project } from 'src/projects/entity/project.entity';
import { Reservation } from 'src/reservation/entitiy/reservation.entity';
import { ClubUser } from 'src/club/entities/club.entity';
export declare class User extends BaseEntity {
    userIdx: number;
    id: string;
    password: string;
    studentId: number;
    name: string;
    phoneNumber: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    userDepartments: UserDepartment[];
    userSocials: UserSocial[];
    userStudies: UserStudy[];
    userProjects: UserProject[];
    reservations: Reservation[];
    clubs: ClubUser[];
    hashPassword(): Promise<void>;
    comparePassword(password: string, hashedPassword: string): Promise<boolean>;
    static findByLogin(id: string, password: string): Promise<User>;
}
export declare class UserDepartment extends BaseEntity {
    userDepartmentIdx: number;
    userIdx: number;
    departmentIdx: number;
    sort: string;
    user: User;
    department: Department;
}
export declare class UserStudy extends BaseEntity {
    userStudyIdx: number;
    userIdx: number;
    studyIdx: number;
    status: string;
    user: User;
    study: Study;
}
export declare class UserProject extends BaseEntity {
    userProjectIdx: number;
    userIdx: number;
    projectIdx: number;
    status: string;
    user: User;
    project: Project;
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
