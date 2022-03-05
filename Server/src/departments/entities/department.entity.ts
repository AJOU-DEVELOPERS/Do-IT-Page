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
import { IsInt, IsString } from 'class-validator';
@Entity('Department')
export class Department extends BaseEntity {
  @IsInt()
  @ApiProperty({
    description: '학과 인덱스',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  departmentIdx: number;
  @IsString()
  @ApiProperty({
    description: '학과 이름',
    example: '미디어학과',
  })
  @Column()
  name: string;

  @OneToMany(
    (_type) => UserDepartment,
    (userDepartments) => userDepartments.department,
  )
  userDepartments: UserDepartment[];
}
