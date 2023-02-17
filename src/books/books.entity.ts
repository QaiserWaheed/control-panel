import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
@PrimaryGeneratedColumn()
id:number
@Column()
BookName: string
@Column()
BookAuthor: string
@Column()
BookPrice: number

}