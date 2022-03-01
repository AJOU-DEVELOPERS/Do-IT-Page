import { ApiProperty } from "@nestjs/swagger";
import { UserStudy } from "src/users/entities/user.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Study')
export class Study extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    studyIdx: number;
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
        default: 'collecting'
    })
    status: string;
    @ApiProperty()
    @CreateDateColumn()
    createdAt: string;
    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: string;
    @OneToMany((_type) => UserStudy, (_type) => _type.study)
    userStudies: UserStudy[];
}