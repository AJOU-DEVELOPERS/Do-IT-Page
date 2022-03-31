import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  BeforeInsert,
  BaseEntity,
  OneToOne,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
@Entity('Department')
export class Department extends BaseEntity {
  @IsInt()
  @ApiProperty({
    description: '학과 인덱스',
    example: 31,
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

  @OneToMany((_type) => User, (_type) => _type.department)
  users: User[];
}
