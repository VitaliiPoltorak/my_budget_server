import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../users/user.entity";
import { Expense } from "../expenses/expense.entity";
import { Income } from "../incomes/income.entity";
import { Credit } from "../credits/credit.entity";

export const ormConfig :TypeOrmModuleOptions= {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'db', // Здесь 'db' — это имя сервиса из docker-compose
  port: 5432,
  username: process.env.POSTGRES_USER || 'admin',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: process.env.POSTGRES_DB || 'my_budget_db',
  entities: [__dirname + '/**/*.entity.ts', User, Credit,
    Expense, Income,
  ],
  migrations: [__dirname + '/migrations/*.ts'],
  migrationsRun: false,
  migrationsTableName: 'my_budget_migrations',
  autoLoadEntities: true,
  synchronize: true,
}


@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
