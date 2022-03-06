import { ApiProperty } from "@nestjs/swagger";
import { UserProject } from "src/users/entities/user.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
        default: 'waiting'
    })
    status: string;
    @ApiProperty()
    @CreateDateColumn()
    createdAt: string;
    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: string;
    @OneToMany((_type) => UserProject, (_type) => _type.project)
    userProjects: UserProject[];
    @OneToMany((_type) => ProjectTechStack, (_type) => _type.project)
    projectTechStacks: ProjectTechStack[];
}

@Entity({name: 'TechStack'})
export class ProjectTechStack extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn({name: 'techStackIdx'})
    projectTechStackIdx: number
    @ApiProperty()
    @Column()
    projectIdx: number
    @ApiProperty()
    @Column()
    name: string
    @ManyToOne(() => Project, (project) => project.projectTechStacks)
    @JoinColumn({ name: 'projectIdx', referencedColumnName: 'projectIdx' })
    project: Project
}