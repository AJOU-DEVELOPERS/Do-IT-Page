import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  BeforeInsert,
  BaseEntity,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
@Entity('User')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userIdx: number;

  @Column()
  password: string;
  @Column()
  studentId: number;
  @Column()
  name: string;
  @Column()
  phoneNumber: string;
  @Column()
  email: string;
  @Column()
  createdAt: string;
  @Column()
  updatedAt: string;
  @Column()
  status: string;

  @OneToMany((_type) => UserTechStack, (_type) => _type.user)
  userTechStacks: UserTechStack[];

  @OneToMany((_type) => UserDepartment, (_type) => _type.user)
  userDepartments: UserDepartment[];

  @OneToMany((_type) => UserSocial, (_type) => _type.user)
  userSocials: UserSocial[];

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
  @PrimaryGeneratedColumn()
  techStackIdx: number;

  @Column()
  name: string;

  @OneToMany((_type) => UserTechStack, (_type) => _type.techStack)
  userTechStacks: UserTechStack[];
}

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn()
  departmentIdx: number;

  @Column()
  name: string;

  @OneToMany((_type) => UserDepartment, (_type) => _type.department)
  userDepartments: UserDepartment[];
}

@Entity()
export class UserTechStack extends BaseEntity {
  @PrimaryGeneratedColumn()
  userTechStack: number;
  @Column()
  userIdx: number;

  @Column()
  techStackIdx: number;

  @ManyToOne((_type) => User, (_type) => _type.userTechStacks)
  user: User;

  @ManyToOne((_type) => TechStack, (_type) => _type.userTechStacks)
  techStack: TechStack;
}

@Entity()
export class UserDepartment extends BaseEntity {
  @PrimaryGeneratedColumn()
  userDepartmentIdx: number;
  @Column()
  userIdx: number;

  @Column()
  departmentIdx: number;
  @Column()
  sort: string;

  @ManyToOne((_type) => User, (_type) => _type.userDepartments)
  user: User;

  @ManyToOne((_type) => Department, (_type) => _type.userDepartments)
  department: Department;
}

@Entity()
export class UserSocial extends BaseEntity {
  @PrimaryGeneratedColumn()
  userSocialIdx: number;

  @Column()
  userIdx: number;

  @Column()
  name: string;

  @Column()
  id: string;

  @Column()
  status: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @ManyToOne((_type) => User, (_type) => _type.userSocials)
  user: User;
}
