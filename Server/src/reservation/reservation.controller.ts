import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseSuccessResponse, ResultSuccessResponse } from 'src/commons/dto/response-common.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { DeleteReservationDto } from './dto/delete-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entitiy/reservation.entity';
import { ReservationService } from './reservation.service';

@Controller('reservation')
@ApiTags('Reservation API')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Post()
    @ApiOperation({
        summary: '과방 신청 API',
        description: 'JSON 객체 반환'
    })
    @ApiBody({ type: CreateReservationDto })
    @ApiOkResponse({ description: '과방 신청 성공', type: BaseSuccessResponse })
    create(@Body() createReservationDto: CreateReservationDto) {
        return this.reservationService.createReservation(createReservationDto);
    }

    @Get()
    @ApiOperation({
        summary: '전체 과방 신청 정보 불러오기 API',
        description: '전체 정보 혹은 빈 배열 반환'
    })
    @ApiOkResponse({ description: '전체 스터디 불러오기 성공', type: ResultSuccessResponse })
    async findAll(){
        const reservations = await this.reservationService.findAll()
        return new ResultSuccessResponse(reservations);
    }

    @Get(':idx')
    @ApiOperation({
        summary: '특정 과방 신청 정보 불러오기 API',
        description: '성공 시 과방 신청 정보 반환'
    })
    @ApiOkResponse({ description: '특정 과방 신청 정보 불러오기 성공', type: ResultSuccessResponse })
    async findOne(@Param('idx') reservationIdx: number){
        const reservation = await this.reservationService.findOne(reservationIdx);
        return new ResultSuccessResponse(reservation);
    }

    @Get(':year/:month')
    @ApiOperation({
        summary: '특정 과방 신청 정보 불러오기 API',
        description: '성공 시 과방 신청 정보 반환'
    })
    @ApiOkResponse({ description: '특정 과방 신청 정보 불러오기 성공', type: ResultSuccessResponse })
    async findMonth(
        @Param('year') year: string,
        @Param('month') month: string){
        const reservations = await this.reservationService.findMonth(year, month);
        return new ResultSuccessResponse(reservations);
    }

    @Patch(':idx')
    @ApiOperation({
        summary: '과방 신청 정보 수정 API',
        description: '성공 시 과방 신청 정보 반환'
    })
    @ApiBody({ type: UpdateReservationDto })
    @ApiOkResponse({ description: '과방 신청 정보 수정 성공', type: BaseSuccessResponse })
    update(@Param('idx') reservationIdx: number, @Body() updateReservationDto: UpdateReservationDto) {
        return this.reservationService.updateReservation(reservationIdx, updateReservationDto);
    }

    @Patch('accept/:idx')
    @ApiOperation({
        summary: '과방 신청 승인 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '과방 신청 승인 성공', type: BaseSuccessResponse })
    accept(@Param('idx') reservationIdx: number) {
        return this.reservationService.accept(reservationIdx);
    }

    @Patch('reject/:idx')
    @ApiOperation({
        summary: '과방 신청 거절 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '과방 신청 거절 성공', type: BaseSuccessResponse })
    reject(@Param('idx') reservationIdx: number) {
        return this.reservationService.reject(reservationIdx);
    }

    @Patch('processing/:idx')
    @ApiOperation({
        summary: '과방 신청 진행중 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '과방 신청 진행중 성공', type: BaseSuccessResponse })
    processing(@Param('idx') reservationIdx: number) {
        return this.reservationService.processing(reservationIdx);
    }

    @Delete(':idx')
    @ApiOperation({
        summary: '과방 신청 정보 삭제 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '과방 신청 정보 삭제 성공' })
    remove(
        @Param('idx') idx: number,
        @Body() deleteReservationDto: DeleteReservationDto) {
        return this.reservationService.remove(idx, deleteReservationDto);
    }
}
