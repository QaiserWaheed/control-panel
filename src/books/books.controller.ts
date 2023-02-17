import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddBook, DeleteBook, UpdateBook } from './books.model';
import { BooksService } from './books.service';

@ApiTags('BOOKS')
@Controller('books')
export class BooksController {
  constructor(private BookService: BooksService) {}

  @Post('/addbook')
  async AddBook(@Body() data: AddBook) {
    return this.BookService.AddBook(data);
  }

  @Post('/UpdateBook')
  async UpdateBook(@Body() data: UpdateBook) {
   return   this.BookService.UpdateBook(data);
  }

  @Delete('/deletBook')
  async DeleteBook(@Body() data: DeleteBook) {
    return   this.BookService.DeleteBook(data);
  }
}
