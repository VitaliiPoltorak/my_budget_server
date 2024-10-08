import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expense } from "../expenses/expense.entity";
import { Credit } from "../credits/credit.entity";
import { Currency } from "../types";


@Entity('incomes')
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  date: string;

  @Column()
  name: string;

  @Column()
  currency: Currency;

  @ManyToMany(() => Expense, expense => expense.incomes)
  @JoinTable()
  expenses: Expense[];

  @ManyToMany(() => Credit, credit => credit.incomes)
  @JoinTable()
  credits: Credit[];
}
