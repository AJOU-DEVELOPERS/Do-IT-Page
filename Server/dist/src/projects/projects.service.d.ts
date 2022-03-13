import { BaseFailResponse, BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { Connection } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectResponseDto, GetProjectsResponseDto } from './dto/get-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    private connection;
    constructor(connection: Connection);
    createProject(createProjectDto: CreateProjectDto): Promise<BaseSuccessResponse>;
    updateProject(projectIdx: number, updateProjectDto: UpdateProjectDto): Promise<BaseSuccessResponse>;
    acceptCreate(projectIdx: number): Promise<BaseSuccessResponse>;
    findAll(): Promise<BaseFailResponse | GetProjectsResponseDto>;
    findOne(projectIdx: number): Promise<BaseFailResponse | GetProjectResponseDto>;
    remove(projectIdx: number): Promise<BaseSuccessResponse>;
    apply(userIdx: number, projectIdx: number): Promise<BaseSuccessResponse>;
    acceptParticipation(userProjectIdx: number): Promise<BaseSuccessResponse>;
    rejectParticipation(userProjectIdx: number): Promise<BaseSuccessResponse>;
}
