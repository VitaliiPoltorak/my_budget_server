import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CreditsModule } from './credits/credits.module';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';
import { UsersModule } from './users/users.module';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [DatabaseModule, CreditsModule, ExpensesModule, IncomesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
