import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Income } from "./income.entity";
import { CreateIncomeDto } from "./dto/create-income.dto";
import { UpdateIncomeDto } from "./dto/update-income.dto";
import { BaseService } from "../_base/base.service";

@Injectable()
export class IncomesService extends BaseService<Income, CreateIncomeDto, UpdateIncomeDto> {
  constructor(
    @InjectRepository(Income) private incomesRepository: Repository<Income>,
  ) {
    super(incomesRepository);
  }

  // Here you can add more specific methods or override the existing ones
}

