import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IAddBook, IUpdateBook, IDeleteBook } from './books.dto';

export class AddBook implements IAddBook {
    
    @ApiProperty()
    @IsNotEmpty()
    BookName: string
    @ApiProperty()
    @IsNotEmpty()
    BookAuthor: string

    @ApiProperty()
    @IsNotEmpty()
    BookPrice: number
}

export class UpdateBook implements IUpdateBook {
    
    @ApiProperty()
    @IsNotEmpty()
    BookName: string

    @ApiProperty()
    @IsNotEmpty()
    BookAuthor: string

    @ApiProperty()
    @IsNotEmpty()
    BookPrice: number
}

export class DeleteBook implements IDeleteBook{


    @ApiProperty()
    @IsNotEmpty()
    BookName: string;

}