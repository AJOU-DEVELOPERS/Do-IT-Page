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
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';


@Entity('User')
export class User extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userIdx: number;
  @ApiProperty()
  @Column()
  password: string;
  @ApiProperty()
  @Column()
  studentId: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  phoneNumber: string;
  @ApiProperty()
  @Column()
  email: string;
  @ApiProperty()
  @Column()
  createdAt: string;
  @ApiProperty()
  @Column()
  updatedAt: string;
  @ApiProperty()
  @Column()
  status: string;

  @OneToMany((_type) => UserTechStack, (_type) => _type.user)
  userTechStacks: UserTechStack[];

  @OneToMany(
    (_type) => UserDepartment,
    (userDepartments) => userDepartments.user,
  )
  userDepartments: UserDepartment[];

  @OneToMany((_type) => UserSocial, (_type) => _type.user)
  userSocials: UserSocial[];

  @OneToMany((_type) => UserStudy, (_type) => _type.user)
  userStudies: UserStudy[];

  @BeforeInsert()
  async hashPassword() {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}

@Entity()
export class TechStack extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  techStackIdx: number;
  @ApiProperty()
  @Column()
  name: string;

  @OneToMany((_type) => UserTechStack, (_type) => _type.techStack)
  userTechStacks: UserTechStack[];
}

@Entity()
export class UserTechStack extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userTechStack: number;
  @ApiProperty()
  @Column()
  userIdx: number;
  @ApiProperty()
  @Column()
  techStackIdx: number;

  @ManyToOne((_type) => User, (_type) => _type.userTechStacks)
  user: User;

  @ManyToOne((_type) => TechStack, (_type) => _type.userTechStacks)
  techStack: TechStack;
}

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
  userStudyIdx: number
  @ApiProperty()
  @Column()
  userIdx: number
  @ApiProperty()
  @Column()
  studyIdx: number
  @ManyToOne(() => User, (user) => user.userStudies)
  @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
  user: User
  @ManyToOne(() => Study, (study) => study.userStudies)
  @JoinColumn({ name: 'studyIdx', referencedColumnName: 'studyIdx' })
  study: Study
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
