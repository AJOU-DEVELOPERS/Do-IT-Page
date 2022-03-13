import { BaseEntity } from 'typeorm';
import { Semester } from 'src/semester/entities/semester.entity';
import { User } from 'src/users/entities/user.entity';
export declare class ClubUser extends BaseEntity {
    clubUserIdx: number;
    userIdx: number;
    semesterIdx: number;
    isPay: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    semester: Semester;
    static findClubUserList(): Promise<any[]>;
}
