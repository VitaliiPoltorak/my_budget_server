import { IsNotEmpty } from "class-validator";

export class CreateCreditDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly date: string;

  @IsNotEmpty()
  readonly value: number;
  // readonly password: string;
}
