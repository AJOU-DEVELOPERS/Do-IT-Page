import { Injectable } from '@nestjs/common';
import {
  BaseFailResponse,
  BaseSuccessResponse,
} from 'src/commons/dto/response-common.dto';
import { Semester } from 'src/semester/entities/semester.entity';
import { Connection } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { GetClubUserListResponse } from './dto/get-clubUser.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubUser } from './entities/club.entity';
import { User } from 'src/users/entities/user.entity';
import { object } from 'joi';
@Injectable()
export class ClubService {
  constructor(private readonly connection: Connection) {}
  async acceptClub(clubUserIdx: number) {
    const queryRunner = this.connection.createQueryRunner();
    try {
      const clubUserInfo: ClubUser = (await ClubUser.findClubUserList()).find(
        (o) => o.clubUserIdx == clubUserIdx,
      );
      if (clubUserInfo.isPay == 1)
        return new BaseSuccessResponse('이미 수락한 유저입니다.');
      await queryRunner.connect();
      const clubUserRepo = queryRunner.manager.getRepository(ClubUser);
      const userRepo = queryRunner.manager.getRepository(User);
      await queryRunner.startTransaction();
      await clubUserRepo.update(clubUserIdx, { isPay: 1 });
      if (clubUserInfo.status === 'L')
        await userRepo.update(clubUserInfo.userIdx, { status: 'N' });
      await queryRunner.commitTransaction();
      return new BaseSuccessResponse();
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
      return new BaseFailResponse('동아리 수락에 실패했습니다.');
    } finally {
      await queryRunner.release();
    }
  }
  async refuseClub(clubIdx: number) {
    try {
      await ClubUser.update(clubIdx, { status: 'Y' });
      return new BaseSuccessResponse();
    } catch (error) {
      console.log(error);
      return new BaseFailResponse('동아리 거절에 실패했습니다.');
    }
  }
  async findClubList() {
    try {
      const clubUserList = await ClubUser.findClubUserList();
      return new GetClubUserListResponse(clubUserList);
    } catch (error) {
      console.log(error);
      return new BaseFailResponse(
        '동아리 회원 목록을 불러오는데 실패하였습니다.',
      );
    }
  }
  async create(userIdx: number) {
    const userPayCheck = new ClubUser();
    const semester = new Semester();
    const semesterIdx = (await semester.findNowSemester()).semesterIdx;
    const status = 'N'; //삭제 여부
    const duplicateCheck = await ClubUser.findOne({
      where: { userIdx, semesterIdx, status },
    });
    if (duplicateCheck) return new BaseSuccessResponse('이미 신청하였습니다.');
    userPayCheck.userIdx = userIdx;
    userPayCheck.semesterIdx = semesterIdx;

    await userPayCheck.save();
    return new BaseSuccessResponse();
  }

  // findAll() {
  //   return `This action returns all club`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} club`;
  // }

  // update(id: number, updateClubDto: UpdateClubDto) {
  //   return `This action updates a #${id} club`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} club`;
  // }
}
