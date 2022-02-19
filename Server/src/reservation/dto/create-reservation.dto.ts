import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
import internal from "stream";

export class CreateReservationDto {
    @IsString()
    @ApiProperty({
        description: '예약 시작 시간',
        example: ''
    })
    reservationStart: Date;
    @IsString()
    @ApiProperty({
        description: '예약 종료 시간',
        example: ''
    })
    reservationEnd: Date;
    @IsString()
    @ApiProperty({
        description: '과방 대여 사유',
        example: '...의 이유로 과방 대여를 신청합니다.'
    })
    title: string;
    @IsInt()
    @ApiProperty({
        description: '신청 유저 인덱스',
        example: '1'
    })
    userIdx: number;
}