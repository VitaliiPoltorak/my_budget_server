import { Controller } from "@nestjs/common";
import { User } from './user.entity';
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { BaseController } from "../_base/base.controller";

@Controller('users')
export class UsersController extends BaseController<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly entityService: UsersService) {
    super(entityService);
  }
}
