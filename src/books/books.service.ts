import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';
import { IAddBook, IUpdateBook, IDeleteBook } from './books.dto';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private bookrepo: Repository<Book>) {}

  async AddBook(data: IAddBook) {
    const user = await this.bookrepo.save(data);
    return user;
  }

  async UpdateBook(data: IUpdateBook) {
    const book = this.bookrepo.findOneBy({ BookName: data.BookName });
    if (!book) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
     else {
      this.bookrepo.update(
        {
          BookName: data.BookName, BookAuthor: data.BookAuthor, },{ BookPrice: data.BookPrice},
      );
    }
  }

  async DeleteBook(data: IDeleteBook) {
    const user = this.bookrepo.findOneBy({ BookName: data.BookName });
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    } else {
      this.bookrepo.delete(data.BookName);
    }
  }
}
