import { ApiProperty } from "@nestjs/swagger";
import { TechStack, UserProject } from "src/users/entities/user.entity";
import { BaseEntity, Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum projectStatus {
    processing = "processing",
    collecting = "collecting",
    done = "done", 
};

@Entity('Project')
export class Project extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    projectIdx: number;
    @ApiProperty()
    @Column()
    name: string;
    @ApiProperty()
    @Column({
        type: "text"
    })
    description: string;
    @ApiProperty()
    @Column()
    totalHeadcount: number;
    @ApiProperty()
    @Column()
    leaderName: string;
    @ApiProperty()
    @Column({
        type: "enum",
        enum: projectStatus,
        default: "collecting"
    })
    status: projectStatus;
    @OneToMany((_type) => UserProject, (_type) => _type.project)
    userProjects: UserProject[];
    @OneToMany((_type) => ProjectTechStack, (_type) => _type.project)
    projectTechStacks: ProjectTechStack[];
    @ApiProperty()
    @DeleteDateColumn()
    deletedAt?: Date;
}

@Entity()
export class ProjectTechStack extends BaseEntity {
    @PrimaryGeneratedColumn()
    projectTechStackIdx: number
    @Column()
    projectIdx: number
    @Column()
    techStackIdx: number
    @ManyToOne(() => Project, (project) => project.projectTechStacks)
    @JoinColumn({ name: 'projectIdx', referencedColumnName: 'projectIdx' })
    project: Project
    @ManyToOne(() => TechStack, (techstack) => techstack.projectTechStacks)
    @JoinColumn({ name: 'techStackIdx', referencedColumnName: 'techStackIdx' })
    techStack: TechStack
}