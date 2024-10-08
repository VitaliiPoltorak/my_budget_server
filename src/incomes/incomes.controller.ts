import { Controller } from "@nestjs/common";
import { IncomesService } from "./incomes.service";
import { Income } from "./income.entity";
import { CreateIncomeDto } from "./dto/create-income.dto";
import { UpdateIncomeDto } from "./dto/update-income.dto";
import { BaseController } from "../_base/base.controller";

@Controller('incomes')
export class IncomesController extends BaseController<
  Income,
  CreateIncomeDto,
  UpdateIncomeDto
> {
  constructor(private readonly entityService: IncomesService) {
    super(entityService);
  }
}
