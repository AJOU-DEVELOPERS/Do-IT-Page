import { UserStudy } from "src/users/entities/user.entity";
import { BaseEntity } from "typeorm";
export declare class Study extends BaseEntity {
    studyIdx: number;
    name: string;
    description: string;
    totalHeadcount: number;
    leaderName: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    userStudies: UserStudy[];
    numParticipant: number;
}
