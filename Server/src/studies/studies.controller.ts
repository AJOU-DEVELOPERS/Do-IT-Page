import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { number } from 'joi';
import { JwtAuthGuard } from 'src/auths/auth.jwt.guard';
import { Roles } from 'src/auths/roles.decorator';
import { RolesGuard } from 'src/auths/roles.guard';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { UserDto } from 'src/users/dto/get-user.dto';
import { CreateStudyDto } from './dto/create-study.dto';
import { GetStudiesResponseDto, GetStudyResponseDto } from './dto/get-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { StudiesService } from './studies.service';

@Controller('studies')
@ApiTags('Study API')
export class StudiesController {
    constructor(private readonly studiesService: StudiesService) {}
    @Roles('N')
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
    @ApiOkResponse({
        type: GetStudiesResponseDto,
        description: '전체 스터디 불러오기 성공' 
    })
    findAll() {
        return this.studiesService.findAll();
    }

    @Get(':studyIdx')
    @ApiOperation({
        summary: '특정 스터디 불러오기 API',
        description: '성공 시 스터디 반환, 실패 시 false 반환'
    })
    @ApiOkResponse({ 
        type: GetStudyResponseDto,
        description: '특정 스터디 불러오기 성공' 
    })
    findOne(@Param('studyIdx') studyIdx: number) {
        return this.studiesService.findOne(studyIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
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

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Delete(':studyIdx')
    @ApiOperation({
        summary: '스터디 삭제 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 삭제 성공' })
    remove(@Param('studyIdx') studyIdx: number) {
        return this.studiesService.remove(studyIdx);
    }

    @Roles('N')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post(':studyIdx')
    @ApiOperation({
        summary: '스터디 신청 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 신청 성공' })
    async apply(@Req() req, @Param('studyIdx') studyIdx: number) {
        const isApplied = await this.studiesService.findOneUserStudy(req.user.userIdx, studyIdx);
        if (!isApplied) {
            return this.studiesService.apply(req.user.userIdx, studyIdx);   
        }
        return new BaseSuccessResponse("이미 신청중인 스터디입니다.");
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('accept/create/:studyIdx')
    @ApiOperation({
        summary: '스터디 생성 요청 승인',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 생성 요청 승인 성공 '})
    acceptCreate(@Param('studyIdx') studyIdx: number) {
        return this.studiesService.acceptCreate(studyIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('reject/create/:studyIdx')
    @ApiOperation({
        summary: '스터디 생성 요청 거부',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 생성 요청 거부 성공 '})
    rejectCreate(@Param('studyIdx') studyIdx: number) {
        return this.studiesService.remove(studyIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('update/studyStatus/:studyIdx')
    @ApiOperation({
        summary: '스터디 상태 변경',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 상태 변경 성공' })
    updateStudyStatus(@Param('studyIdx') studyIdx: number) {
        return this.studiesService.updateStudyStatus(studyIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('accept/participation/:userStudyIdx')
    @ApiOperation({
        summary: '스터디 참여 요청 승인',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 참여 요청 승인 성공' })
    acceptParticipation(@Param('userStudyIdx') userStudyIdx: number) {
        return this.studiesService.acceptParticipation(userStudyIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('reject/participation/:userStudyIdx')
    @ApiOperation({
        summary: '스터디 참여 요청 거부',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '스터디 참여 요청 거부 성공' })
    reject(@Param('userStudyIdx') userStudyIdx: number) {
        return this.studiesService.rejectParticipation(userStudyIdx);
    }
}
