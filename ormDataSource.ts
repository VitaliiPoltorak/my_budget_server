import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ormConfig } from "./src/database/database.module";

dotenv.config();

export default new DataSource({
  ...(<PostgresConnectionOptions>ormConfig),
  migrationsTableName: 'my_budget_migrations',
  migrationsTransactionMode: 'each',
  synchronize: false,
  entities: [__dirname + '/src/**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/src/**/subscriber/*.entity{.ts,.js}'],
  logging: true,
});
