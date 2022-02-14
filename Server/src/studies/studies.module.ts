import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudiesController } from './studies.controller';
import { StudiesService } from './studies.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([
          
      ])
  ],
  controllers: [StudiesController],
  providers: [StudiesService]
})
export class StudiesModule {}
