import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly email: string;
  // readonly password: string;
}
