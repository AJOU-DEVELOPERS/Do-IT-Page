import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseFailResponse, BaseSuccessResponse, ResultSuccessResponse } from 'src/commons/dto/response-common.dto';
import { User, UserStudy } from 'src/users/entities/user.entity';
import { Connection, getRepository, Repository } from 'typeorm';
import { CreateStudyDto } from './dto/create-study.dto';
import { GetStudiesResponseDto, GetStudyResponseDto } from './dto/get-study.dto';
import { GetUserStudyResponseDto } from './../users/dto/get-userStudy.dto';
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
            userStudy.status = 'leader';
    
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

    async acceptCreate(studyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(Study, studyIdx, {
                status: 'collecting'
            });
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse('스터디 생성 요청 승인에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateStudyStatus(studyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const exStudy = await Study.findOne({
                where: {
                    studyIdx: studyIdx
                }
            });
            if (exStudy.status == "collecting") {
                await queryRunner.manager.update(Study, studyIdx, {
                    status: "processing"
                });
            } else if (exStudy.status == "processing") {
                await queryRunner.manager.update(Study, studyIdx, {
                    status: "done"
                });
            }
            await queryRunner.commitTransaction();
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResponse("스터디 상태 바꾸기에 실패했습니다.")
        } finally {
            await queryRunner.release();
        }
    }

    async findAll() {
        try {
            const studies = await Study.find({
                relations: [
                    'userStudies'
                ]
            });
            studies.forEach((study) => {
                study.numParticipant = study.userStudies.filter((userStudy) => userStudy.status == 'leader' || userStudy.status == 'accepted').length;
                delete study.userStudies
            });
            return new GetStudiesResponseDto(studies);
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('모든 스터디 불러오기를 실패했습니다.');
        }
    }

    async findOne(studyIdx: number) {
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
            return new GetStudyResponseDto(study);
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 불러오기를 실패했습니다.');
        }
    }

    async findOneUserStudy(userIdx: number, studyIdx: number) {
        try {
            const userStudy: UserStudy = await UserStudy.findOne( 
                { 
                    where: {
                        userIdx: userIdx,
                        studyIdx: studyIdx
                    },
            });
            return userStudy;
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('유저 스터디 정보 불러오기를 실패했습니다.');
        }
    }

    async remove(studyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(Study, studyIdx, {
                status: 'deleted'
            });
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

    async acceptParticipation(userStudyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(UserStudy, userStudyIdx, {
                status: 'accepted'
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

    async rejectParticipation(userStudyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(UserStudy, userStudyIdx, {
                status: 'rejected'
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
