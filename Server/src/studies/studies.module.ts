import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserStudy } from 'src/users/entities/user.entity';
import { Study } from './entity/study.entity';
import { StudiesController } from './studies.controller';
import { StudiesService } from './studies.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([
          Study,
          UserStudy,
          User
      ])
  ],
  controllers: [StudiesController],
  providers: [StudiesService]
})
export class StudiesModule {}
