import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateMikulaDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @IsBoolean()
    goodOrBad: boolean

    @IsNotEmpty()
    @IsString()
    askedFor: string
}




