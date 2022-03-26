import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auths/auth.jwt.guard';
import { Roles } from 'src/auths/roles.decorator';
import { RolesGuard } from 'src/auths/roles.guard';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectResponseDto, GetProjectsResponseDto } from './dto/get-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
@ApiTags('Project API')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}
    @Roles('N')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiOperation({
        summary: '프로젝트 등록 API',
        description: 'true false 반환'
    })
    @ApiBody({ type: CreateProjectDto })
    @ApiOkResponse({ description: '프로젝트 등록 성공', type: BaseSuccessResponse })
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.createProject(createProjectDto);
    }

    @Get()
    @ApiOperation({
        summary: '전체 프로젝트 불러오기 API',
        description: '성공 시 전체 프로젝트 혹은 빈 배열 반환, 실패 시 false 반환'
    })
    @ApiOkResponse({ 
        type: GetProjectsResponseDto,
        description: '전체 프로젝트 불러오기 성공'
    })
    findAll() {
        return this.projectsService.findAll();
    }

    @Get(':projectIdx')
    @ApiOperation({
        summary: '특정 프로젝트 불러오기 API',
        description: '성공 시 프로젝트 반환, 실패 시 false 반환'
    })
    @ApiOkResponse({ 
        type: GetProjectResponseDto,
        description: '특정 프로젝트 불러오기 성공' 
    })
    findOne(@Param('projectIdx') projectIdx: number) {
        return this.projectsService.findOne(projectIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Patch(':projectIdx')
    @ApiOperation({
        summary: '프로젝트 정보 수정 API',
        description: 'true false 반환'
    })
    @ApiBody({ type: UpdateProjectDto })
    @ApiOkResponse({ description: '프로젝트 정보 수정 성공', type: BaseSuccessResponse })
    update(@Param('projectIdx') projectIdx: number, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectsService.updateProject(projectIdx, updateProjectDto);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Delete(':projectIdx')
    @ApiOperation({
        summary: '프로젝트 삭제 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '프로젝트 삭제 성공' })
    remove(@Param('projectIdx') projectIdx: number) {
        return this.projectsService.remove(projectIdx);
    }

    @Roles('N')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post(':projectIdx')
    @ApiOperation({
        summary: '프로젝트 신청 API',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '프로젝트 신청 성공 '})
    async apply(@Req() req, @Param('projectIdx') projectIdx: number) {
        const isApplied = await this.projectsService.findOneUserProject(req.user.userIdx, projectIdx);
        if (!isApplied) {
            return this.projectsService.apply(req.user.userIdx, projectIdx);   
        }
        return new BaseSuccessResponse("이미 신청중인 프로젝트입니다.");
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('accept/create/:projectIdx')
    @ApiOperation({
        summary: '프로젝트 생성 요청 승인',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '프로젝트 생성 요청 승인 성공 '})
    acceptCreate(@Param('projectIdx') projectIdx: number) {
        return this.projectsService.acceptCreate(projectIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('reject/create/:projectIdx')
    @ApiOperation({
        summary: '프로젝트 생성 요청 거부',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '프로젝트 생성 요청 거부 성공 '})
    rejectCreate(@Param('projectIdx') projectIdx: number) {
        return this.projectsService.remove(projectIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('update/projectStatus/:projectIdx')
    @ApiOperation({
        summary: '프로젝트 상태 변경',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '프로젝트 상태 변경 성공' })
    updateProjectStatus(@Param('projectIdx') projectIdx: number) {
        return this.projectsService.updateProjectStatus(projectIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('accept/participation/:userProjectIdx')
    @ApiOperation({
        summary: '프로젝트 참여 요청 승인',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '프로젝트 참여 요청 승인 성공' })
    accept(@Param('userProjectIdx') userProjectIdx: number) {
        return this.projectsService.acceptParticipation(userProjectIdx);
    }

    @Roles('M')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get('reject/participation/:userProjectIdx')
    @ApiOperation({
        summary: '프로젝트 참여 요청 거부',
        description: 'true false 반환'
    })
    @ApiOkResponse({ description: '프로젝트 참여 요청 거부 성공' })
    reject(@Param('userProjectIdx') userProjectIdx: number) {
        return this.projectsService.rejectParticipation(userProjectIdx);
    }
}
