import { Module } from '@nestjs/common';
import { IncomesController } from './incomes.controller';
import { IncomesService } from './incomes.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Income } from "./income.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [IncomesController],
  providers: [IncomesService],
  exports: [IncomesService],
})
export class IncomesModule {}
