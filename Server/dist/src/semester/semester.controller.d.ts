import { SemesterService } from './semester.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
export declare class SemesterController {
    private readonly semesterService;
    constructor(semesterService: SemesterService);
    create(createSemesterDto: CreateSemesterDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSemesterDto: UpdateSemesterDto): string;
    remove(id: string): string;
}
