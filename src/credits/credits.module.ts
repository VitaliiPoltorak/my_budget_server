import { Module } from '@nestjs/common';
import { CreditsController } from './credits.controller';
import { CreditsService } from './credits.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Credit } from "./credit.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Credit])],
  providers: [CreditsService],
  controllers: [CreditsController],
  exports: [CreditsService]
})
export class CreditsModule {}
