import { BaseFailResponse, BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { Connection, Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { DeleteReservationDto } from './dto/delete-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entitiy/reservation.entity';
export declare class ReservationService {
    private reservationRepository;
    private connection;
    constructor(reservationRepository: Repository<Reservation>, connection: Connection);
    createReservation(createReservationDto: CreateReservationDto): Promise<BaseSuccessResponse>;
    updateReservation(reservationIdx: number, updateReservationDto: UpdateReservationDto): Promise<BaseSuccessResponse>;
    accept(reservationIdx: number): Promise<BaseSuccessResponse>;
    reject(reservationIdx: number): Promise<BaseSuccessResponse>;
    processing(reservationIdx: number): Promise<BaseSuccessResponse>;
    findAll(): Promise<BaseFailResponse | Reservation[]>;
    findOne(reservationIdx: number): Promise<Reservation>;
    findIdx(reservationIdx: number): Promise<Reservation>;
    findMonth(year: string, month: string): Promise<BaseFailResponse | Reservation[]>;
    remove(reservationIdx: number, deleteReservationDto: DeleteReservationDto): Promise<BaseSuccessResponse>;
}
