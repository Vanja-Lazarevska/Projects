import { User } from 'src/interfaces/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lname: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
