/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
