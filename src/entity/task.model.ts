import { Entity, PrimaryGeneratedColumn,Column } from 'typeorm';

@Entity({name: 'task'})
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  order: number;
  @Column()
  description: string;
  @Column({nullable: true})
  userId: string;
  @Column()
  boardId: string;
  @Column({nullable: true})
  columnId: string;
}
