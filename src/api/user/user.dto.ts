import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsUUID()
  public id: number;
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public password: string;
}