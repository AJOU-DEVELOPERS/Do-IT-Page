import { BaseSuccessResponse, ResultSuccessResponse } from 'src/commons/dto/response-common.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { DeleteReservationDto } from './dto/delete-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationService } from './reservation.service';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(createReservationDto: CreateReservationDto): Promise<BaseSuccessResponse>;
    findAll(): Promise<ResultSuccessResponse>;
    findOne(reservationIdx: number): Promise<ResultSuccessResponse>;
    findMonth(year: string, month: string): Promise<ResultSuccessResponse>;
    update(reservationIdx: number, updateReservationDto: UpdateReservationDto): Promise<BaseSuccessResponse>;
    accept(reservationIdx: number): Promise<BaseSuccessResponse>;
    reject(reservationIdx: number): Promise<BaseSuccessResponse>;
    processing(reservationIdx: number): Promise<BaseSuccessResponse>;
    remove(idx: number, deleteReservationDto: DeleteReservationDto): Promise<BaseSuccessResponse>;
}
