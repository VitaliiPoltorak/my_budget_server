import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Income } from "../incomes/income.entity";

@Entity('credits')
export class Credit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  date: string;

  @Column()
  name: string;

  @ManyToMany(()=> Income, income => income.credits)
  @JoinTable()
  incomes: Income[]
}
