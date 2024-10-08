import { Currency } from "../../types";

export class UpdateIncomeDto {
  readonly value?: number;
  readonly date?: string;
  readonly name?: string;
  readonly currency?: Currency;
  // Include other fields that can be updated
}
