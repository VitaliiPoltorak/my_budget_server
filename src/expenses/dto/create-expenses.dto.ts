import { IsNotEmpty } from "class-validator";

export class CreateExpensesDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly date: string;

  @IsNotEmpty()
  readonly value: number;

}
