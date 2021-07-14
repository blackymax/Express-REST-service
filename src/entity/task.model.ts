import { Entity, PrimaryGeneratedColumn,Column } from 'typeorm';

@Entity({name: 'task'})
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({length: 200})
  title: string;
  @Column()
  order: number;
  @Column({length: 200})
  description: string;
  @Column({type: 'varchar', nullable: true})
  userId!: string|null;
  @Column()
  boardId: string;
  @Column({nullable: true})
  columnId: string;
}
export default Task