import { PartialType } from '@nestjs/mapped-types';
import { CreateMikulaDto } from './create-mikula.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateMikulaDto extends PartialType(CreateMikulaDto) {

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsBoolean()
    goodOrBad?: boolean;

    @IsOptional()
    @IsString()
    askedFor?: string;

}
