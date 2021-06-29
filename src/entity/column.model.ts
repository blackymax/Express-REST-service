import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Board from './board.model';

@Entity({ name: 'column' })
class Columns {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  title: string;

  @Column('integer')
  order: number;

  @ManyToOne(() => Board, { onDelete: 'CASCADE' })
  board: Board;

  @Column()
  boardId: string;
}
export default Columns