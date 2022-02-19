import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseFailResponse, BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { User } from 'src/users/entities/user.entity';
import { Connection, Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entitiy/reservation.entity';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation) private reservationRepository: Repository<Reservation>,
        private connection: Connection,
    ) {}
    
    async createReservation(createReservationDto: CreateReservationDto) {
        const {reservationStart, reservationEnd, title, userIdx} = createReservationDto;
        const reservation = new Reservation();
        const queryRunner = this.connection.createQueryRunner();
        reservation.reservationStart = reservationStart;
        reservation.reservationEnd = reservationEnd;
        reservation.reservationStart = reservationStart;
        reservation.title = title;
        reservation.userIdx = userIdx;

        await queryRunner.connect();
        try {
            const user: User = await queryRunner.manager.findOne(User, {
                userIdx: createReservationDto.userIdx
            })
            reservation.user = user;
            await queryRunner.manager.save(reservation);
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('과방 예약에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    // async updateStudy(studyIdx: number, updateReservationDto: updateReservationDto) {
    //     const queryRunner = this.connection.createQueryRunner();
        
    // }

    async findAll() {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservations = await queryRunner.manager.find(Reservation);
            return reservations;
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('모든 과방 신청 정보 불러오기를 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async findOne(reservationIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            const reservation = await queryRunner.manager.find(Reservation, 
                { 
                    where: {
                        reservationIdx: reservationIdx
                    },
            });
            return reservation;
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('과방 신청 정보 불러오기를 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async remove(reservationIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            await queryRunner.manager.softDelete(Reservation, reservationIdx);
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 삭제에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }




}
