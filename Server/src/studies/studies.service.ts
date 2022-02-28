import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseFailResponse, BaseSuccessResponse, ResultSuccessResponse } from 'src/commons/dto/response-common.dto';
import { User, UserStudy, UserStudyStatus } from 'src/users/entities/user.entity';
import { Connection, getRepository, Repository } from 'typeorm';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study } from './entity/study.entity';

@Injectable()
export class StudiesService {
    constructor(
        private connection: Connection,
    ) {}
    async createStudy(createStudyDto: CreateStudyDto) {
        const study = new Study();
        const queryRunner = this.connection.createQueryRunner();
        study.name = createStudyDto.name;
        study.description = createStudyDto.description;
        study.totalHeadcount = createStudyDto.totalHeadcount;
        study.leaderName = createStudyDto.leaderName;

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user: User = await User.findOne({
                where: {
                    userIdx: createStudyDto.leaderUserIdx
                }
            });
            await queryRunner.manager.save(study);
            
            const userStudy = new UserStudy();
            userStudy.user = user;
            userStudy.study = study;
            userStudy.status = UserStudyStatus.leader;
    
            await queryRunner.manager.save(userStudy);
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('스터디 생성에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateStudy(studyIdx: number, updateStudyDto: UpdateStudyDto) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(Study, studyIdx, updateStudyDto);
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('스터디 정보 수정에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async findAll() {
        try {
            const studies = await Study.find();
            return new ResultSuccessResponse(studies);
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('모든 스터디 불러오기를 실패했습니다.');
        }
    }

    async findOne(studyIdx: number) {
        
        // try {
        //     const study = await Study.find( 
        //         { 
        //             where: {
        //                 studyIdx: studyIdx
        //             },
        //             relations: [
        //                 "userStudies"
        //             ],   
        //     });
        //     return new ResultSuccessResponse(study);
        // } catch(error) {
        //     console.log(error);
        //     return new BaseFailResponse('스터디 불러오기를 실패했습니다.');
        // }
        try {
            const study = await Study.find( 
                { 
                    where: {
                        studyIdx: studyIdx
                    },
                    relations: [
                        'userStudies',
                        'userStudies.user'
                    ] 
            });
            return new ResultSuccessResponse(study);
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 불러오기를 실패했습니다.');
        }
    }

    async remove(studyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.softDelete(Study, studyIdx);
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('스터디 삭제에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async apply(userIdx: number, studyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user: User = await User.findOne({
                where: {
                    userIdx: userIdx
                }
            });
            const study: Study = await Study.findOne({
                where: {
                    studyIdx: studyIdx
                }
            });
            const userStudy = new UserStudy();
            userStudy.user = user;
            userStudy.study = study;

            await queryRunner.manager.save(userStudy);
            await queryRunner.commitTransaction();

            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('스터디 신청에 실패했습니다.');
        } finally {
            queryRunner.release();
        }
    }

    async accept(userStudyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(UserStudy, userStudyIdx, {
                status: UserStudyStatus.accepted
            })
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('스터디 참여 승인에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async reject(userStudyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(UserStudy, userStudyIdx, {
                status: UserStudyStatus.rejected
            })
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('스터디 참여 거부에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }
}
