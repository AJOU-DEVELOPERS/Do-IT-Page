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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReservationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateReservationDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '예약 시작 날짜',
        example: '2022-2-22'
    }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "reservationStartDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '예약 시작 시간',
        example: '18:00:00'
    }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "reservationStartHour", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '예약 종료 날짜',
        example: '2022-2-24'
    }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "reservationEndDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '예약 종료 시간',
        example: '18:00:00'
    }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "reservationEndHour", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        description: '신청 유저 인덱스',
        example: 1
    }),
    __metadata("design:type", Number)
], CreateReservationDto.prototype, "userIdx", void 0);
exports.CreateReservationDto = CreateReservationDto;
//# sourceMappingURL=create-reservation.dto.js.map