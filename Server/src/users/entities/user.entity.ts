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
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ForbiddenException } from '@nestjs/common';
import { Project, ProjectTechStack } from 'src/projects/entity/project.entity';
import { Reservation } from 'src/reservation/entitiy/reservation.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ThrowFailResponse } from 'src/commons/dto/response-common.dto';
import { Semester } from 'src/semester/entities/semester.entity';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Min,
  IsInt,
  IsEmail,
} from 'class-validator';
@Entity('User')
export class User extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userIdx: number;
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 아이디',
    example: 'kyi9592',
  })
  @Column()
  id: string;
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 비밀번호',
    example: 'ASDJ123sa',
  })
  @Column()
  password: string;
  @Min(9)
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: '학번',
    example: '201823815',
  })
  @Column()
  studentId: number;
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
  @MinLength(11)
  @IsNotEmpty()
  @ApiProperty({
    description: '유저 핸드폰 번호',
    example: '01012345678',
  })
  @Column()
  phoneNumber: string;
  @IsNotEmpty()
  @IsEmail()
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
  @OneToMany(
    (_type) => UserDepartment,
    (userDepartments) => userDepartments.user,
  )
  userDepartments: UserDepartment[];

  @OneToMany((_type) => UserSocial, (_type) => _type.user)
  userSocials: UserSocial[];

  @OneToMany((_type) => UserStudy, (_type) => _type.user)
  userStudies: UserStudy[];

  @OneToMany((_type) => UserProject, (_type) => _type.user)
  userProjects: UserProject[];

  @OneToMany((_type) => Reservation, (_type) => _type.user)
  reservations: Reservation[];

  @OneToMany((_type) => UserPayCheck, (_type) => _type.user)
  userPayChecks: UserPayCheck[];

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
    const user = await User.findOne({ id });
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

@Entity()
export class UserDepartment extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userDepartmentIdx: number;
  @ApiProperty()
  @Column()
  userIdx: number;
  @ApiProperty()
  @Column()
  departmentIdx: number;
  @ApiProperty()
  @Column()
  sort: string;

  @ManyToOne(() => User, (user) => user.userDepartments)
  @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
  user: User;

  @ManyToOne(() => Department, (department) => department.userDepartments)
  @JoinColumn({ name: 'departmentIdx', referencedColumnName: 'departmentIdx' })
  department: Department;
}

@Entity()
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

@Entity()
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

@Entity('UserPayCheck')
export class UserPayCheck extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userPayCheckIdx: number;
  @ApiProperty()
  @Column()
  userIdx: number;
  @ApiProperty()
  @Column()
  semesterIdx: number;
  @ApiProperty()
  @Column()
  isPay: number;

  @ManyToOne((_type) => User, (_type) => _type.userPayChecks)
  @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
  user: User;
  @ManyToOne((_type) => Semester, (_type) => _type.userPayChecks)
  @JoinColumn({ name: 'semesterIdx', referencedColumnName: 'semesterIdx' })
  semester: Semester;
}
