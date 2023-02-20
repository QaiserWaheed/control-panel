import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';
import { IAddBook, IUpdateBook} from './books.dto';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private bookrepo: Repository<Book>) {}

  async AddBook(data: IAddBook) {
    const user = await this.bookrepo.save(data);
    return user;
  }

  async UpdateBook(id: number, data: IUpdateBook) {
    const book = await this.bookrepo.findOneBy({ id: id});
    if (!book) {
      throw new HttpException('Book Not Found', HttpStatus.NOT_FOUND);
    }
     else {
     
     book.BookName = data.BookName
     book.BookAuthor = data.BookAuthor
     book.BookPrice = data.BookPrice

   const saved =  await this.bookrepo.save(book)
    return saved
    }
  }


  async GetAllBooks(){
     
    const Books = await this.bookrepo.find()
   return  Books

  }

  async GetById(id:number){
     
    const Book = await this.bookrepo.findOneBy({id: id})
    
    if (!Book){
      throw new HttpException("Book not Found", HttpStatus.NOT_FOUND)
    }
    else{
      return Book;
    }

  }

  async DeleteBook(id:number) {
    const Book = await this.bookrepo.findOneBy({id: id})
    if (!Book){
      throw new HttpException("Book not Found", HttpStatus.NOT_FOUND)
    }
    else{
      return Book;
    }
  }
}
