import { IsNotEmpty } from "class-validator";
import { Currency } from "../../types";

export class CreateIncomeDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly date: string;

  @IsNotEmpty()
  readonly value: number;

  @IsNotEmpty()
  readonly currency: Currency;
  // readonly password: string;
}
