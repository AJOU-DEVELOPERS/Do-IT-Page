import {
  IsInt,
  Length,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsArray,
  isArray,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty, PickType } from '@nestjs/swagger';
import { extend, object } from 'joi';
import { User } from '../../users/entities/user.entity';
import { Department } from 'src/departments/entities/department.entity';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { ClubUser } from '../entities/club.entity';
import { SignupUserDepartmentDto } from 'src/users/dto/create-user.dto';

export class ClubUserData extends PickType(User, [
  'userIdx',
  'id',
  'studentId',
  'name',
  'phoneNumber',
  'status',
] as const) {
  @ApiProperty({
    description: '동아리 회원 인덱스',
    example: 2,
  })
  clubUserIdx: number;

  @ApiProperty({
    description: '회비 납부 여부 ( 0 : 미납 , 1 : 수납 )',
    example: 0,
  })
  isPay: number;

  @ApiProperty({
    description: '신청 날짜',
    example: '2022-03-06T04:59:55.000Z',
  })
  createdAt: string;
}
export class ClubUserResData {
  @ApiProperty({
    description: '메세지',
    example: 'string',
  })
  message: string;

  @ApiProperty({ isArray: true, type: () => ClubUserData })
  clubUserList: ClubUserData[];
}
export class GetClubUserListResponse extends BaseSuccessResponse {
  constructor(clubUserList: ClubUserData[]) {
    super();
    this.res.clubUserList = clubUserList;
  }

  @ApiProperty({ isArray: false, type: () => ClubUserResData })
  res: any;
}
