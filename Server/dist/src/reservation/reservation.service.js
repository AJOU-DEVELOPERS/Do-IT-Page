"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const reservation_entity_1 = require("./entitiy/reservation.entity");
let ReservationService = class ReservationService {
    constructor(reservationRepository, connection) {
        this.reservationRepository = reservationRepository;
        this.connection = connection;
    }
    async createReservation(createReservationDto) {
        const { reservationStartDate, reservationStartHour, reservationEndDate, reservationEndHour, userIdx, } = createReservationDto;
        const reservation = new reservation_entity_1.Reservation();
        const queryRunner = this.connection.createQueryRunner();
        reservation.reservationStartDate = reservationStartDate;
        reservation.reservationStartHour = reservationStartHour;
        reservation.reservationEndDate = reservationEndDate;
        reservation.reservationEndHour = reservationEndHour;
        reservation.userIdx = userIdx;
        await queryRunner.connect();
        try {
            const user = await queryRunner.manager.findOne(user_entity_1.User, {
                userIdx: createReservationDto.userIdx,
            });
            if (!user) {
                return new response_common_dto_1.BaseSuccessResponse();
            }
            reservation.user = user;
            reservation.userName = user.name;
            await queryRunner.manager.save(reservation);
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('과방 예약에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateReservation(reservationIdx, updateReservationDto) {
        const { reservationStartDate, reservationStartHour, reservationEndDate, reservationEndHour, userIdx, } = updateReservationDto;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservation = await this.findIdx(reservationIdx);
            if (reservation.userIdx == userIdx) {
                reservation.reservationStartDate = reservationStartDate;
                reservation.reservationStartHour = reservationStartHour;
                reservation.reservationEndDate = reservationEndDate;
                reservation.reservationEndHour = reservationEndHour;
                await queryRunner.manager.save(reservation);
                return new response_common_dto_1.BaseSuccessResponse();
            }
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('예약 정보 변경에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async accept(reservationIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservation = await this.findIdx(reservationIdx);
            reservation.status = 'accepted';
            await queryRunner.manager.save(reservation);
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('예약 정보 승인에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async reject(reservationIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservation = await this.findIdx(reservationIdx);
            reservation.status = 'rejected';
            await queryRunner.manager.save(reservation);
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('예약 정보 거절에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async processing(reservationIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservation = await this.findIdx(reservationIdx);
            reservation.status = 'processing';
            await queryRunner.manager.save(reservation);
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('예약 정보 진행중으로 변경에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservations = await queryRunner.manager.find(reservation_entity_1.Reservation);
            return reservations;
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('예약 정보 확인에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async findOne(reservationIdx) {
        const reservation = await this.findIdx(reservationIdx);
        return reservation;
    }
    async findIdx(reservationIdx) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservation = await queryRunner.manager.findOne(reservation_entity_1.Reservation, {
                where: {
                    reservationIdx: reservationIdx,
                },
            });
            return reservation;
        }
        catch (error) {
            console.log(error);
            throw new response_common_dto_1.BaseFailResponse(`예약 정보 확인에 실패했습니다.`);
        }
        finally {
            await queryRunner.release();
        }
    }
    async findMonth(year, month) {
        const queryRunner = this.connection.createQueryRunner();
        if (month.length < 2) {
            month = '0' + month;
        }
        const time = year + '-' + month;
        await queryRunner.connect();
        try {
            const reservation = await queryRunner.manager.find(reservation_entity_1.Reservation, {
                reservationStartDate: (0, typeorm_2.Like)(`${time}%`),
            });
            return reservation;
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse(`예약 정보 확인에 실패했습니다.`);
        }
        finally {
            await queryRunner.release();
        }
    }
    async remove(reservationIdx, deleteReservationDto) {
        const { userIdx } = deleteReservationDto;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const reservation = await this.findIdx(reservationIdx);
            if (reservation.userIdx == userIdx) {
                await queryRunner.manager.delete(reservation_entity_1.Reservation, reservationIdx);
                return new response_common_dto_1.BaseSuccessResponse();
            }
            return new response_common_dto_1.BaseSuccessResponse(false);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('예약 정보 삭제에 실패했습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
};
ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reservation_entity_1.Reservation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], ReservationService);
exports.ReservationService = ReservationService;
//# sourceMappingURL=reservation.service.js.map