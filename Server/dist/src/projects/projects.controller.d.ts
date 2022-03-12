import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectResponseDto, GetProjectsResponseDto } from './dto/get-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<BaseSuccessResponse>;
    findAll(): Promise<import("src/commons/dto/response-common.dto").BaseFailResponse | GetProjectsResponseDto>;
    findOne(projectIdx: number): Promise<import("src/commons/dto/response-common.dto").BaseFailResponse | GetProjectResponseDto>;
    update(projectIdx: number, updateProjectDto: UpdateProjectDto): Promise<BaseSuccessResponse>;
    remove(projectIdx: number): Promise<BaseSuccessResponse>;
    apply(userIdx: number, projectIdx: number): Promise<BaseSuccessResponse>;
    acceptCreate(projectIdx: number): Promise<BaseSuccessResponse>;
    rejectCreate(projectIdx: number): Promise<BaseSuccessResponse>;
    accept(userProjectIdx: number): Promise<BaseSuccessResponse>;
    reject(userProjectIdx: number): Promise<BaseSuccessResponse>;
}
