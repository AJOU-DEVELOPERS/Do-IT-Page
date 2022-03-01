import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseFailResponse, BaseSuccessResponse, ThrowFailResponse } from 'src/commons/dto/response-common.dto';
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
    
    async createReservation(createReservationDto: CreateReservationDto){
        const {reservationStartDate, reservationStartHour, reservationEndDate, reservationEndHour, userIdx} = createReservationDto;
        const reservation = new Reservation();
        const queryRunner = this.connection.createQueryRunner();
        reservation.reservationStartDate = reservationStartDate;
        reservation.reservationStartHour = reservationStartHour;
        reservation.reservationEndDate = reservationEndDate;
        reservation.reservationEndHour = reservationEndHour;
        reservation.userIdx = userIdx;

        await queryRunner.connect();
        try {
            const user: User = await queryRunner.manager.findOne(User, {
                userIdx: createReservationDto.userIdx,
            })
            if(!user){
                return new BaseFailResponse('존재하지 않는 유저입니다.')
            }
            reservation.user = user;
            reservation.userName = user.name;
            await queryRunner.manager.save(reservation);
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('과방 예약에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateReservation(reservationIdx: number, updateReservationDto: UpdateReservationDto) {
        const {reservationStartDate, reservationStartHour, reservationEndDate, reservationEndHour, userIdx} = updateReservationDto;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try{
            const reservation = await this.findIdx(reservationIdx);
            if(reservation.userIdx == userIdx){
                reservation.reservationStartDate = reservationStartDate;
                reservation.reservationStartHour = reservationStartHour;
                reservation.reservationEndDate = reservationEndDate;
                reservation.reservationEndHour = reservationEndHour;
                await queryRunner.manager.save(reservation);
                return new BaseSuccessResponse();
            }
        }catch(error){
            console.log(error);
            return new BaseFailResponse('예약 정보 변경에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }
    }

    async accept(reservationIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try{
            const reservation = await this.findIdx(reservationIdx);
            reservation.status = 'accepted';
            await queryRunner.manager.save(reservation);
            return new BaseSuccessResponse();
        }catch(error){
            console.log(error);
            return new BaseFailResponse('예약 정보 승인에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }
    }

    async reject(reservationIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try{
            const reservation = await this.findIdx(reservationIdx);
            reservation.status = 'rejected';
            await queryRunner.manager.save(reservation);
            return new BaseSuccessResponse();
        }catch(error){
            console.log(error);
            return new BaseFailResponse('예약 정보 거절에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }
    }

    async processing(reservationIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try{
            const reservation = await this.findIdx(reservationIdx);
            reservation.status = 'processing';
            await queryRunner.manager.save(reservation);
            return new BaseSuccessResponse();
        }catch(error){
            console.log(error);
            return new BaseFailResponse('예약 정보 진행중으로 변경에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }
    }

    async findAll(){
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservations = await queryRunner.manager.find(Reservation);
            if(!reservations){
                return new BaseFailResponse('예약 정보가 없습니다.');
            }
            return reservations;
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('예약 정보 확인에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async findOne(reservationIdx: number){
        const reservation = await this.findIdx(reservationIdx);
        if(!reservation){
            throw new ThrowFailResponse('예약 정보가 없습니다');
        }
        return reservation;
    }

    async findIdx(reservationIdx: number){
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
            throw new BaseFailResponse(`예약 정보 확인에 실패했습니다.`);
        } finally {
            await queryRunner.release();
        }
    }

    async findMonth(year: string, month: string){
        const queryRunner = this.connection.createQueryRunner();
        const time = year + '-' + month;
        await queryRunner.connect();
        try {
            const reservation = await queryRunner.manager.find(Reservation, 
                { 
                    reservationStartDate: Like(`${time}%`),
            });
            if(reservation.length === 0){
                throw new ThrowFailResponse(`예약 정보 확인에 실패했습니다.`);
            }
            return reservation;
        } catch(error) {
            console.log(error);
            throw new ThrowFailResponse(`예약 정보 확인에 실패했습니다.`);
        } finally {
            await queryRunner.release();
        }
    }

    async remove(reservationIdx: number, deleteReservationDto: DeleteReservationDto){
        const {userIdx} = deleteReservationDto;
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            const reservation = await this.findIdx(reservationIdx);
            if(reservation.userIdx == userIdx){
                await queryRunner.manager.delete(Reservation, reservationIdx);
                return new BaseSuccessResponse();
            }
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('예약 정보 삭제에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }
}
