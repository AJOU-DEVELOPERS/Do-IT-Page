import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  BeforeInsert,
  BaseEntity,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ForbiddenException } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ThrowFailResponse } from 'src/commons/dto/response-common.dto';
import { Semester } from 'src/semester/entities/semester.entity';
import { User } from 'src/users/entities/user.entity';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Min,
  IsInt,
  IsEmail,
} from 'class-validator';
@Entity('ClubUser')
export class ClubUser extends BaseEntity {
  @ApiProperty({
    description: '동아리 회원 인덱스',
    example: 2,
  })
  @PrimaryGeneratedColumn()
  clubUserIdx: number;
  @ApiProperty({
    description: '유저 인덱스',
    example: 2,
  })
  @Column()
  userIdx: number;
  @ApiProperty({
    description: '학기 인덱스',
    example: 2,
  })
  @Column()
  semesterIdx: number;
  @ApiProperty({
    description: '회비 납부 여부 ( 0 : 미납 , 1 : 수납 )',
    example: 0,
  })
  @Column()
  isPay: number;

  @Column()
  status: string;
  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn()
  updatedAt: string;
  @ManyToOne((_type) => User, (_type) => _type.clubs)
  @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
  user: User;
  @ManyToOne((_type) => Semester, (_type) => _type.clubs)
  @JoinColumn({ name: 'semesterIdx', referencedColumnName: 'semesterIdx' })
  semester: Semester;
  static async findClubUserList() {
    const result = await this.createQueryBuilder('cu')
      .select([
        'cu.clubUserIdx as clubUserIdx',
        'cu.isPay as isPay',
        'cu.createdAt as createdAt',
        'u.userIdx as userIdx',
        'u.id as id',
        'u.studentId as studentId',
        'u.name as name',
        'u.phoneNumber as phoneNumber',
        'u.status as status',
      ])
      .leftJoin('cu.user', 'u')
      .where('cu.status = "N"')
      .getRawMany();
    return result;
  }
}
