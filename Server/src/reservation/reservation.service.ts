import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './entitiy/reservation.entity';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation) private reservationRepository: Repository<Reservation>
    ) {}
    
    

}
