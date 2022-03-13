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
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const create_reservation_dto_1 = require("./dto/create-reservation.dto");
const delete_reservation_dto_1 = require("./dto/delete-reservation.dto");
const update_reservation_dto_1 = require("./dto/update-reservation.dto");
const reservation_service_1 = require("./reservation.service");
let ReservationController = class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    create(createReservationDto) {
        return this.reservationService.createReservation(createReservationDto);
    }
    async findAll() {
        const reservations = await this.reservationService.findAll();
        return new response_common_dto_1.ResultSuccessResponse(reservations);
    }
    async findOne(reservationIdx) {
        const reservation = await this.reservationService.findOne(reservationIdx);
        if (!reservation) {
            return new response_common_dto_1.ResultSuccessResponse([]);
        }
        return new response_common_dto_1.ResultSuccessResponse(reservation);
    }
    async findMonth(year, month) {
        const reservations = await this.reservationService.findMonth(year, month);
        return new response_common_dto_1.ResultSuccessResponse(reservations);
    }
    update(reservationIdx, updateReservationDto) {
        return this.reservationService.updateReservation(reservationIdx, updateReservationDto);
    }
    accept(reservationIdx) {
        return this.reservationService.accept(reservationIdx);
    }
    reject(reservationIdx) {
        return this.reservationService.reject(reservationIdx);
    }
    processing(reservationIdx) {
        return this.reservationService.processing(reservationIdx);
    }
    remove(idx, deleteReservationDto) {
        return this.reservationService.remove(idx, deleteReservationDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '과방 신청 API',
        description: 'JSON 객체 반환'
    }),
    (0, swagger_1.ApiBody)({ type: create_reservation_dto_1.CreateReservationDto }),
    (0, swagger_1.ApiOkResponse)({ description: '과방 신청 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '전체 과방 신청 정보 불러오기 API',
        description: '전체 정보 혹은 빈 배열 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '전체 스터디 불러오기 성공', type: response_common_dto_1.ResultSuccessResponse }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':idx'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 과방 신청 정보 불러오기 API',
        description: '성공 시 과방 신청 정보 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '특정 과방 신청 정보 불러오기 성공', type: response_common_dto_1.ResultSuccessResponse }),
    __param(0, (0, common_1.Param)('idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':year/:month'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 과방 신청 정보 불러오기 API',
        description: '성공 시 과방 신청 정보 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '특정 과방 신청 정보 불러오기 성공', type: response_common_dto_1.ResultSuccessResponse }),
    __param(0, (0, common_1.Param)('year')),
    __param(1, (0, common_1.Param)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "findMonth", null);
__decorate([
    (0, common_1.Patch)(':idx'),
    (0, swagger_1.ApiOperation)({
        summary: '과방 신청 정보 수정 API',
        description: '성공 시 과방 신청 정보 반환'
    }),
    (0, swagger_1.ApiBody)({ type: update_reservation_dto_1.UpdateReservationDto }),
    (0, swagger_1.ApiOkResponse)({ description: '과방 신청 정보 수정 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Param)('idx')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reservation_dto_1.UpdateReservationDto]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('accept/:idx'),
    (0, swagger_1.ApiOperation)({
        summary: '과방 신청 승인 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '과방 신청 승인 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Param)('idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "accept", null);
__decorate([
    (0, common_1.Patch)('reject/:idx'),
    (0, swagger_1.ApiOperation)({
        summary: '과방 신청 거절 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '과방 신청 거절 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Param)('idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "reject", null);
__decorate([
    (0, common_1.Patch)('processing/:idx'),
    (0, swagger_1.ApiOperation)({
        summary: '과방 신청 진행중 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '과방 신청 진행중 성공', type: response_common_dto_1.BaseSuccessResponse }),
    __param(0, (0, common_1.Param)('idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "processing", null);
__decorate([
    (0, common_1.Delete)(':idx'),
    (0, swagger_1.ApiOperation)({
        summary: '과방 신청 정보 삭제 API',
        description: 'true false 반환'
    }),
    (0, swagger_1.ApiOkResponse)({ description: '과방 신청 정보 삭제 성공' }),
    __param(0, (0, common_1.Param)('idx')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, delete_reservation_dto_1.DeleteReservationDto]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "remove", null);
ReservationController = __decorate([
    (0, common_1.Controller)('reservation'),
    (0, swagger_1.ApiTags)('Reservation API'),
    __metadata("design:paramtypes", [reservation_service_1.ReservationService])
], ReservationController);
exports.ReservationController = ReservationController;
//# sourceMappingURL=reservation.controller.js.map