import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Reservation')
export class Reservation extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    reservationIdx: number;

    @ApiProperty()
    @Column()
    reservationStart: Date;

    @ApiProperty()
    @Column()
    reservationEnd: Date;

    @ApiProperty()
    @Column()
    userIdx: number

    @ApiProperty()
    @Column()
    title: string;

    @DeleteDateColumn()
    deletedAt?: Date; 

    @ManyToOne(()=>User, (user)=>user.reservations)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;
}