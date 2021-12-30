import { Prisma } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateUserDto implements Prisma.UserCreateInput {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    name?: string;

    posts?: Prisma.PostCreateNestedManyWithoutAuthorInput;
}
