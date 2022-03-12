import { PartialType } from '@nestjs/mapped-types';
import { SignupUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(SignupUserDto) {}
