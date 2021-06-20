import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'column'})
export default class Columns {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  order: number;
}
