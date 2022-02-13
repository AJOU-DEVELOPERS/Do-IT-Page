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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  departmentIdx: number;
  @ApiProperty()
  @Column()
  name: string;

  @OneToMany(
    (_type) => UserDepartment,
    (userDepartments) => userDepartments.department,
  )
  userDepartments: UserDepartment[];
}
