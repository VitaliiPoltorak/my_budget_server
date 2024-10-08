import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Credit } from "./credit.entity";
import { Repository } from "typeorm";
import { CreateCreditDto } from "./dto/create-credit.dto";
import { UpdateCreditDto } from "./dto/update-credit.dto";
import { BaseService } from "../_base/base.service";


@Injectable()
export class CreditsService extends BaseService<Credit, CreateCreditDto, UpdateCreditDto> {
  constructor(
    @InjectRepository(Credit) private creditsRepository: Repository<Credit>,
  ) {
    super(creditsRepository);
  }

  // Here you can add more specific methods or override the existing ones
}
