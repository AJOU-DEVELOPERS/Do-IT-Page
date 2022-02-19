import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Reservation } from './entitiy/reservation.entity';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Reservation,
        User,
    ])
  ],
  controllers: [ReservationController],
  providers: [ReservationService]
})
export class ReservationModule {}
