import { ApiProperty } from "@nestjs/swagger"
import { IsString, isString } from "class-validator"

export class CreateUserDto {
    @ApiProperty()
    "name":string
    @ApiProperty()
    "email":string
}
