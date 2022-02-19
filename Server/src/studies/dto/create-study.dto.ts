import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
import internal from "stream";

export class CreateStudyDto {
    @IsString()
    @ApiProperty({
        description: '스터디 이름',
        example: 'NestJS 기초 스터디'
    })
    name: string;
    @IsString()
    @ApiProperty({
        description: '스터디 설명',
        example: 'NestJS의 기본 동작 원리와 ... 을 공부합니다.'
    })
    description?: string;
    @IsInt()
    @ApiProperty({
        description: '스터디 총원',
        example: '5'
    })
    totalHeadcount: number;
    @IsInt()
    @ApiProperty({
        description: '스터디장 유저 아이디',
        example: '2'
    })
    leaderUserIdx: number;
    @IsString()
    @ApiProperty({
        description: '스터디장 이름',
        example: '이호용'
    })
    leaderName: string;
}