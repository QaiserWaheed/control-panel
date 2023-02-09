import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  UserName: string;

  @Column({ unique: true })
  Email: string;

  @Column()
  Password: string;

  @Column()
  otp: number;

  @Column({ default: 'Pending' })
  status: string;
}
