import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseFailResponse, BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { User, UserStudy, UserStudyStatus } from 'src/users/entities/user.entity';
import { Connection, Repository } from 'typeorm';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study } from './entity/study.entity';

@Injectable()
export class StudiesService {
    constructor(
        @InjectRepository(Study) private studyRepository: Repository<Study>,
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
        try {
            const user: User = await queryRunner.manager.findOne(User, {
                userIdx: createStudyDto.leaderUserIdx
            })
            await queryRunner.manager.save(study);
            
            const userstudy = new UserStudy();
            userstudy.user = user;
            userstudy.study = study;
            userstudy.status = UserStudyStatus.leader;
    
            await queryRunner.manager.save(userstudy);

            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 생성에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateStudy(studyIdx: number, updateStudyDto: UpdateStudyDto) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            await queryRunner.manager.update(Study, studyIdx, updateStudyDto);
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 정보 수정에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async findAll() {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            const studies = await queryRunner.manager.find(Study);
            return studies;
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('모든 스터디 불러오기를 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async findOne(studyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            const study = await queryRunner.manager.find(Study, 
                { 
                    where: {
                        studyIdx: studyIdx
                    },
                    relations: [
                        "userStudies"
                    ]
            });
            return study;
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 불러오기를 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async remove(studyIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        try {
            await queryRunner.manager.softDelete(Study, studyIdx);
            return new BaseSuccessResponse();
        } catch(error) {
            console.log(error);
            return new BaseFailResponse('스터디 삭제에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    apply() {

    }

    accept() {

    }

    reject() {

    }
}
