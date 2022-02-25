import { ApiProperty } from "@nestjs/swagger";
import { UserStudy } from "src/users/entities/user.entity";
import { BaseEntity, Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum studyStatus {
    processing = "processing",
    collecting = "collecting",
    done = "done",    
};

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
        type: "enum",
        enum: studyStatus,
        default: "collecting"
    })
    status: studyStatus;
    @OneToMany((_type) => UserStudy, (_type) => _type.study)
    userStudies: UserStudy[];
    @ApiProperty()
    @DeleteDateColumn()
    deletedAt?: Date; 
}