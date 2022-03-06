import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ClubUser } from 'src/club/entities/club.entity';
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

  @OneToMany((_type) => ClubUser, (_type) => _type.semester)
  clubs: ClubUser[];

  async findNowSemester(): Promise<Semester> {
    return Semester.findOne({
      where: 'semesterStartDate <= NOW() and semesterEndDate >= NOW()',
    });
  }
}
