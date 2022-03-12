import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { CreateStudyDto } from './dto/create-study.dto';
import { GetStudiesResponseDto, GetStudyResponseDto } from './dto/get-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { StudiesService } from './studies.service';
export declare class StudiesController {
    private readonly studiesService;
    constructor(studiesService: StudiesService);
    create(createStudyDto: CreateStudyDto): Promise<BaseSuccessResponse>;
    findAll(): Promise<import("src/commons/dto/response-common.dto").BaseFailResponse | GetStudiesResponseDto>;
    findOne(studyIdx: number): Promise<import("src/commons/dto/response-common.dto").BaseFailResponse | GetStudyResponseDto>;
    update(studyIdx: number, updateStudyDto: UpdateStudyDto): Promise<BaseSuccessResponse>;
    remove(studyIdx: number): Promise<BaseSuccessResponse>;
    apply(userIdx: number, studyIdx: number): Promise<BaseSuccessResponse>;
    acceptCreate(studyIdx: number): Promise<BaseSuccessResponse>;
    rejectCreate(studyIdx: number): Promise<BaseSuccessResponse>;
    acceptParticipation(userStudyIdx: number): Promise<BaseSuccessResponse>;
    reject(userStudyIdx: number): Promise<BaseSuccessResponse>;
}
