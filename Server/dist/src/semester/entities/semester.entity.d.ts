import { BaseEntity } from 'typeorm';
import { ClubUser } from 'src/club/entities/club.entity';
export declare class Semester extends BaseEntity {
    semesterIdx: number;
    year: string;
    semester: string;
    semesterStartDate: string;
    semesterEndDate: string;
    clubs: ClubUser[];
    findNowSemester(): Promise<Semester>;
}
