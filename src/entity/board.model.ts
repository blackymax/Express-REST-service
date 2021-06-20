import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Columns } from './column.model';

@Entity ({name: 'board'})
export class Board{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, nullable: true})
  title: string;

  @OneToMany(
    () => Columns,
    column => column.board,
    { onDelete: 'CASCADE', cascade: true, eager: true }
  )
  columns: Columns[];
}
