import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Expense } from "./expense.entity";
import { CreateExpensesDto } from "./dto/create-expenses.dto";
import { UpdateExpensesDto } from "./dto/update-expenses.dto";
import { BaseService } from "../_base/base.service";


@Injectable()
export class ExpensesService extends BaseService<Expense, CreateExpensesDto, UpdateExpensesDto> {
  constructor(
    @InjectRepository(Expense) private expensesRepository: Repository<Expense>,
  ) {
    super(expensesRepository);
  }

  // Here you can add more specific methods or override the existing ones
}
