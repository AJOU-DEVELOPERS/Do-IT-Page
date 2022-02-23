import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @ApiProperty({
        description: '프로젝트명',
        example: 'Do-It 홈페이지 리뉴얼'
    })
    name: string;
    @IsString()
    @ApiProperty({
        description: '프로젝트 설명',
        example: 'Do-It 홈페이지 코드 리팩토링 및 구조 개선'
    })
    description?: string;
    @IsNumber()
    @ApiProperty({
        description: '프로젝트 총원',
        example: 5
    })
    totalHeadcount: number;
    @IsNumber()
    @ApiProperty({
        description: '프로젝트 리더 유저 아이디 ',
        example: 3
    })
    leaderUserIdx: number;
    @IsString()
    @ApiProperty({
        description: '프로젝트 리더 이름',
        example: '이호용'
    })
    leaderName: string;
    @IsString({ each: true })
    @ApiProperty({
        description: '프로젝트 기술스택',
        example: ['html', 'css', 'js']
    })
    techStacks?: string[];
}