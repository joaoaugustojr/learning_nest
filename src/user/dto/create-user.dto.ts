import { Prisma } from '@prisma/client';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateUserDto implements Prisma.UserCreateInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  password?: string;

  @IsBoolean()
  @IsOptional()
  ative?: boolean | true;
}
