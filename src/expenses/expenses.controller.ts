import { Controller } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { Expense } from "./expense.entity";
import { CreateExpensesDto } from "./dto/create-expenses.dto";
import { UpdateExpensesDto } from "./dto/update-expenses.dto";
import { BaseController } from "../_base/base.controller";

@Controller('expenses')
export class ExpensesController extends BaseController<
  Expense,
  CreateExpensesDto,
  UpdateExpensesDto
> {
  constructor(private readonly entityService: ExpensesService) {
    super(entityService);
  }
}
