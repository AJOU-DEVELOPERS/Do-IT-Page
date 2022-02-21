import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class DeleteReservationDto{
    @IsInt()
    @ApiProperty({
        description: '신청 유저 인덱스',
        example: '1'
    })
    userIdx: number;
}