/* eslint-disable prettier/prettier */
import { IsString, IsEmail } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
