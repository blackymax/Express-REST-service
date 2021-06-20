import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import Columns from './column.model';

@Entity ({name: 'board'})
export class Board{
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column({ type: "json", nullable: true })
  columns?: string;
}
