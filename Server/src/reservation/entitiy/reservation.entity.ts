import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ApiProperty()
    @Column()
    createdAt: Date;

    @ManyToOne(()=>User, (user)=>user.reservations)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;
}