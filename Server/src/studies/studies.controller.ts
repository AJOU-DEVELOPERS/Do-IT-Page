import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { StudiesService } from './studies.service';

@Controller('studies')
@ApiTags('Study API')
export class StudiesController {
    constructor(private readonly studiesService: StudiesService) {}

    @Post()
    @ApiOperation({
        summary: '스터디 등록 API',
        description: 'true false 반환'
    })
    @ApiBody({ type: CreateStudyDto })
    @ApiOkResponse({ description: '스터디 등록 성공', type: BaseSuccessResponse })
    create(@Body() createStudyDto: CreateStudyDto) {
        return this.studiesService.createStudy(createStudyDto);
    }

    @Get()
    @ApiOperation({
        summary: '전체 스터디 불러오기 API',
        description: '성공 시 전체 스터디 혹은 빈 배열 반환, 실패 시 false 반환'
    })
    @ApiOkResponse({ description: '전체 스터디 불러오기 성공' })
    findAll() {
        return this.studiesService.findAll();
    }

    @Get(':studyIdx')
    @ApiOperation({
        summary: '특정 스터디 불러오기 API',
        description: '성공 시 스터디 반환, 실패 시 false 반환'
    })
    @ApiOkResponse({ description: '특정 스터디 불러오기 성공' })
    findOne(@Param('studyIdx') studyIdx: number) {
        return this.studiesService.findOne(studyIdx);
    }

    @Patch(':studyIdx')
    @ApiOperation({
        summary: '스터디 정보 수정 API',
        description: 'true false 반환'
    })
    @ApiBody({ type: UpdateStudyDto })
    @ApiOkResponse({ description: '스터디 정보 수정 성공', type: BaseSuccessResponse })
    update(@Param('studyIdx') studyIdx: number, @Body() updateStudyDto: UpdateStudyDto) {
        return this.studiesService.updateStudy(studyIdx, updateStudyDto);
    }

    @Delete(':studyIdx')
    @ApiOperation({
        summary: '스터디 삭제 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 삭제 성공' })
    remove(@Param('studyIdx') studyIdx: number) {
        return this.studiesService.remove(studyIdx);
    }
}
