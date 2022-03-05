import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserPayCheck } from 'src/users/entities/user.entity';
import { createQueryBuilder } from 'typeorm';
@Entity('Semester')
export class Semester extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  semesterIdx: number;
  @ApiProperty()
  @Column()
  year: string;
  @ApiProperty()
  @Column()
  semester: string;
  @ApiProperty()
  @Column()
  semesterStartDate: string;
  @ApiProperty()
  @Column()
  semesterEndDate: string;

  @OneToMany((_type) => UserPayCheck, (_type) => _type.semester)
  userPayChecks: UserPayCheck[];

  async findNowSemester(): Promise<Semester> {
    return Semester.findOne({
      where: 'semesterStartDate <= NOW() and semesterEndDate >= NOW()',
    });
  }
}
