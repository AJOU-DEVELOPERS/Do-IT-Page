import { UserProject } from "src/users/entities/user.entity";
import { BaseEntity } from "typeorm";
export declare class Project extends BaseEntity {
    projectIdx: number;
    name: string;
    description: string;
    totalHeadcount: number;
    leaderName: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    userProjects: UserProject[];
    projectTechStacks: ProjectTechStack[];
    numParticipant: number;
}
export declare class ProjectTechStack extends BaseEntity {
    projectTechStackIdx: number;
    projectIdx: number;
    name: string;
    project: Project;
}
