import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Reservation')
export class Reservation extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    reservationIdx: number;

    @ApiProperty()
    @Column()
    reservationStartDate: string;

    @ApiProperty()
    @Column()
    reservationStartHour: string;

    @ApiProperty()
    @Column()
    reservationEndDate: string;

    @ApiProperty()
    @Column()
    reservationEndHour: string;

    @ApiProperty()
    @Column()
    userIdx: number

    @ApiProperty()
    @Column()
    userName: string;

    @ApiProperty()
    @Column({
        default: "processing"
    })
    status: string;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(()=>User, (user)=>user.reservations)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;
}