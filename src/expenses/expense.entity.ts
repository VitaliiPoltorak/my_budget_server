import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Income } from "../incomes/income.entity";

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  date: string;

  @Column()
  name: string;

  @ManyToMany(()=> Income, income => income.expenses)
  @JoinTable()
  incomes: Income[]
}
