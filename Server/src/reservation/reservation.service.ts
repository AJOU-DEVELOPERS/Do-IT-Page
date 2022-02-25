import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseFailResponse, BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { User } from 'src/users/entities/user.entity';
import { Connection, Like, Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { DeleteReservationDto } from './dto/delete-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entitiy/reservation.entity';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation) private reservationRepository: Repository<Reservation>,
        private connection: Connection,
    ) {}
    
    async createReservation(createReservationDto: CreateReservationDto):Promise<Reservation> {
        const {reservationStartDate, reservationStartHour, reservationEndDate, reservationEndHour, userIdx, userName} = createReservationDto;
        const reservation = new Reservation();
        const queryRunner = this.connection.createQueryRunner();
        reservation.reservationStartDate = reservationStartDate;
        reservation.reservationStartHour = reservationStartHour;
        reservation.reservationEndDate = reservationEndDate;
        reservation.reservationEndHour = reservationEndHour;
        reservation.userIdx = userIdx;
        reservation.userName = userName;
        reservation.status = 'created';

        await queryRunner.connect();
        try {
            const user: User = await queryRunner.manager.findOne(User, {
                userIdx: createReservationDto.userIdx,
            })
            reservation.user = user;
            await queryRunner.manager.save(reservation);
            return reservation;
        } catch(error) {
            console.log(error);
            new BaseFailResponse('과방 예약에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateReservation(reservationIdx: number, updateReservationDto: UpdateReservationDto):Promise<Reservation> {
        const {reservationStartDate, reservationStartHour, reservationEndDate, reservationEndHour, userIdx} = updateReservationDto;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try{
            const reservation = await this.findOne(reservationIdx);
            if(reservation.userIdx == userIdx){
                reservation.reservationStartDate = reservationStartDate;
                reservation.reservationStartHour = reservationStartHour;
                reservation.reservationEndDate = reservationEndDate;
                reservation.reservationEndHour = reservationEndHour;
                await queryRunner.manager.save(reservation);
                return reservation;
            }
        }catch(error){
            console.log(error);
            new BaseFailResponse('예약 정보 변경에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }
    }

    async findAll():Promise<Reservation[]> {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservations = await queryRunner.manager.find(Reservation);
            return reservations;
        } catch(error) {
            console.log(error);
        } finally {
            await queryRunner.release();
        }
    }

    async findOne(reservationIdx: number):Promise<Reservation>{
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            const reservation = await queryRunner.manager.findOne(Reservation, 
                { 
                    where: {
                        reservationIdx: reservationIdx
                    },
            });
            return reservation;
        } catch(error) {
            console.log(error);
            throw new NotFoundException(`${reservationIdx}의 예약 정보를 찾을 수 없습니다.`);
        } finally {
            await queryRunner.release();
        }
    }

    async findMonth(year: string, month: string):Promise<Reservation[]>{
        const queryRunner = this.connection.createQueryRunner();
        const time = year + '-' + month;
        await queryRunner.connect();
        try {
            const reservation = await queryRunner.manager.find(Reservation, 
                { 
                    reservationStartDate: Like(`${time}%`),
            });
            return reservation;
        } catch(error) {
            console.log(error);
            throw new NotFoundException(`예약 정보를 찾을 수 없습니다.`);
        } finally {
            await queryRunner.release();
        }
    }

    async remove(reservationIdx: number, deleteReservationDto: DeleteReservationDto):Promise<BaseSuccessResponse>{
        const {userIdx} = deleteReservationDto;
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            const reservation = await this.findOne(reservationIdx);
            if(reservation.userIdx == userIdx){
                await queryRunner.manager.delete(Reservation, reservationIdx);
                return new BaseSuccessResponse();
            }
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 삭제에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }
}
