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
import { UserDepartment } from 'src/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('Department')
export class Department extends BaseEntity {
  @ApiProperty({
    description: '학과 pk',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  departmentIdx: number;
  @ApiProperty({
    description: '학과 이름',
    example: '소프트웨어학과',
  })
  @Column()
  name: string;

  @OneToMany(
    (_type) => UserDepartment,
    (userDepartments) => userDepartments.department,
  )
  userDepartments: UserDepartment[];
}
