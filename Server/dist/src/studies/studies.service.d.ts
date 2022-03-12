import { BaseFailResponse, BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { Connection } from 'typeorm';
import { CreateStudyDto } from './dto/create-study.dto';
import { GetStudiesResponseDto, GetStudyResponseDto } from './dto/get-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
export declare class StudiesService {
    private connection;
    constructor(connection: Connection);
    createStudy(createStudyDto: CreateStudyDto): Promise<BaseSuccessResponse>;
    updateStudy(studyIdx: number, updateStudyDto: UpdateStudyDto): Promise<BaseSuccessResponse>;
    acceptCreate(studyIdx: number): Promise<BaseSuccessResponse>;
    findAll(): Promise<BaseFailResponse | GetStudiesResponseDto>;
    findOne(studyIdx: number): Promise<BaseFailResponse | GetStudyResponseDto>;
    remove(studyIdx: number): Promise<BaseSuccessResponse>;
    apply(userIdx: number, studyIdx: number): Promise<BaseSuccessResponse>;
    acceptParticipation(userStudyIdx: number): Promise<BaseSuccessResponse>;
    rejectParticipation(userStudyIdx: number): Promise<BaseSuccessResponse>;
}
