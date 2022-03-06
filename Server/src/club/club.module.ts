import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';

@Module({
  controllers: [ClubController],
  providers: [ClubService]
})
export class ClubModule {}
