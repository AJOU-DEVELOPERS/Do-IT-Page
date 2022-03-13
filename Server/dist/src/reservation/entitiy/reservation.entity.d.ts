import { User } from "src/users/entities/user.entity";
import { BaseEntity } from "typeorm";
export declare class Reservation extends BaseEntity {
    reservationIdx: number;
    reservationStartDate: string;
    reservationStartHour: string;
    reservationEndDate: string;
    reservationEndHour: string;
    userIdx: number;
    userName: string;
    status: string;
    updatedAt: Date;
    user: User;
}
