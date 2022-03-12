import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
export declare class SemesterService {
    create(createSemesterDto: CreateSemesterDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSemesterDto: UpdateSemesterDto): string;
    remove(id: number): string;
}
