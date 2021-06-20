import { Entity, PrimaryGeneratedColumn,Column } from 'typeorm';

@Entity({name: 'user'})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  login: number;
  @Column()
  password: string;
}

