import { Controller } from "@nestjs/common";
import { CreditsService } from "./credits.service";
import { Credit } from "./credit.entity";
import { UpdateCreditDto } from "./dto/update-credit.dto";
import { CreateCreditDto } from "./dto/create-credit.dto";
import { BaseController } from "../_base/base.controller";

@Controller('credits')
export class CreditsController extends BaseController<
  Credit,
  CreateCreditDto,
  UpdateCreditDto
> {
  constructor(private readonly entityService: CreditsService) {
    super(entityService);
  }
}
