import { Department } from 'src/departments/entities/department.entity';
import { Study } from 'src/studies/entity/study.entity';
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
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ForbiddenException } from '@nestjs/common';
import { Project } from 'src/projects/entity/project.entity';
import { Reservation } from 'src/reservation/entitiy/reservation.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { BaseFailResponse, ThrowFailResponse } from 'src/commons/dto/response-common.dto';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Min,
  IsInt,
  IsEmail,
  Matches,
  Max,
  IsAlphanumeric,
} from 'class-validator';
import { ClubUser } from 'src/club/entities/club.entity';
@Entity('User')
export class User extends BaseEntity {
  @ApiProperty({
    description: '유저 인덱스',
    example: 2,
  })
  @PrimaryGeneratedColumn()
  userIdx: number;
  @IsNotEmpty()
  @IsAlphanumeric()
  @MaxLength(45)
  @ApiProperty({
    description: '유저 아이디',
    example: 'kyi9592',
  })
  @Column()
  id: string;
  @MaxLength(500)
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 비밀번호',
    example: 'ASDJ123sa',
  })
  @Column()
  password: string;
  @Min(100000000)
  @Max(999999999)
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: '학번',
    example: '201823815',
  })
  @Column()
  studentId: number;
  @ApiProperty({
    description: '학과 인덱스',
    example: 30,
  })
  @Column()
  departmentIdx: number;
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(5)
  @ApiProperty({
    description: '유저 이름',
    example: '곽영일',
  })
  @Column()
  name: string;
  @MinLength(10)
  @MaxLength(11)
  @Matches(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, { message: '핸드폰번호를 \'-\' 없이 정확히 입력해주세요.' })
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 핸드폰 번호',
    example: '01012345678',
  })
  @Column()
  phoneNumber: string;
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(45)
  @ApiProperty({
    description: '유저 이메일',
    example: 'kyi9592@ajou.ac.kr',
  })
  @Column({ unique: true })
  email: string;
  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn()
  updatedAt: string;
  @Column()
  status: string;
  // @OneToMany((_type) => UserTechStack, (_type) => _type.user)
  // userTechStacks: UserTechStack[];
  // @OneToMany(
  //   (_type) => UserDepartment,
  //   (userDepartment) => userDepartment.user,
  // )
  // userDepartment: UserDepartment;
  @ManyToOne(() => Department, (department) => department.users)
  @JoinColumn({ name: 'departmentIdx', referencedColumnName: 'departmentIdx' })
  department: Department;

  @OneToMany((_type) => UserSocial, (_type) => _type.user)
  userSocials: UserSocial[];

  @OneToMany((_type) => UserStudy, (_type) => _type.user)
  userStudies: UserStudy[];

  @OneToMany((_type) => UserProject, (_type) => _type.user)
  userProjects: UserProject[];

  @OneToMany((_type) => Reservation, (_type) => _type.user)
  reservations: Reservation[];

  @OneToMany((_type) => ClubUser, (_type) => _type.user)
  clubs: ClubUser[];

  @BeforeInsert()
  async hashPassword() {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
      console.log(error);
      throw new ThrowFailResponse('회원가입에 실패하였습니다.');
    }
  }
  async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
  static async findByLogin(id: string, password: string) {
    const user = await User.findOne({ 
      where: {
          id: id
      },
      relations: [
        'department',
      ] 
});
    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new ThrowFailResponse('아이디와 비밀번호를 다시 입력해주세요.');
    return user;
  }
}

// @Entity()
// export class TechStack extends BaseEntity {
//   @ApiProperty()
//   @PrimaryGeneratedColumn()
//   techStackIdx: number;
//   @ApiProperty()
//   @Column()
//   name: string;
//   @OneToMany((_type) => UserTechStack, (_type) => _type.techStack)
//   userTechStacks: UserTechStack[];
//   @OneToMany((_type) => ProjectTechStack, (_type) => _type.techStack)
//   projectTechStacks: ProjectTechStack[];
// }

// @Entity()
// export class UserTechStack extends BaseEntity {
//   @ApiProperty()
//   @PrimaryGeneratedColumn()
//   userTechStack: number;
//   @ApiProperty()
//   @Column()
//   userIdx: number;
//   @ApiProperty()
//   @Column()
//   techStackIdx: number;

//   @ManyToOne((_type) => User, (_type) => _type.userTechStacks)
//   user: User;

//   @ManyToOne((_type) => TechStack, (_type) => _type.userTechStacks)
//   techStack: TechStack;
// }

// @Entity()
// export class UserDepartment extends BaseEntity {
//   @ApiProperty()
//   @PrimaryGeneratedColumn()
//   userDepartmentIdx: number;
//   @ApiProperty()
//   @Column()
//   userIdx: number;
//   @ApiProperty()
//   @Column()
//   departmentIdx: number;
//   @ApiProperty()
//   @Column()
//   sort: string;

//   @ManyToOne(() => User, (user) => user.userDepartment)
//   @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
//   user: User;

//   @ManyToOne(() => Department, (department) => department.userDepartments)
//   @JoinColumn({ name: 'departmentIdx', referencedColumnName: 'departmentIdx' })
//   department: Department;
// }

@Entity('UserStudy')
export class UserStudy extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userStudyIdx: number;
  @ApiProperty()
  @Column()
  userIdx: number;
  @ApiProperty()
  @Column()
  studyIdx: number;
  @ApiProperty()
  @Column({
    default: 'waiting',
  })
  status: string;
  @ManyToOne(() => User, (user) => user.userStudies)
  @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
  user: User;
  @ManyToOne(() => Study, (study) => study.userStudies)
  @JoinColumn({ name: 'studyIdx', referencedColumnName: 'studyIdx' })
  study: Study;
}

@Entity('UserProject')
export class UserProject extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userProjectIdx: number;
  @ApiProperty()
  @Column()
  userIdx: number;
  @ApiProperty()
  @Column()
  projectIdx: number;
  @ApiProperty()
  @Column({
    default: 'waiting',
  })
  status: string;
  @ManyToOne(() => User, (user) => user.userProjects)
  @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
  user: User;
  @ManyToOne(() => Project, (project) => project.userProjects)
  @JoinColumn({ name: 'projectIdx', referencedColumnName: 'projectIdx' })
  project: Project;
}

@Entity()
export class UserSocial extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userSocialIdx: number;
  @ApiProperty()
  @Column()
  userIdx: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  id: string;
  @ApiProperty()
  @Column()
  status: string;
  @ApiProperty()
  @Column()
  createdAt: string;
  @ApiProperty()
  @Column()
  updatedAt: string;

  @ManyToOne((_type) => User, (_type) => _type.userSocials)
  user: User;
}
