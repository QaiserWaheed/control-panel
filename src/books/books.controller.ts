import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddBook, UpdateBook } from './books.model';

import { BooksService } from './books.service';

@ApiTags('BOOKS')
@Controller('books')
export class BooksController {
  constructor(private BookService: BooksService) {}





@Get()
async GetallBooks(){
  return  await this.BookService.GetAllBooks();
}


  @Post('/addbook')
  async AddBook(@Body() data: AddBook ) {
    return this.BookService.AddBook(data);
  }

  @Get(':id')
  async GetById(@Param("id") id:number){
    return await this.BookService.GetById(id)

  }

  @Patch('/UpdateBook')
  async UpdateBook(@Param("id") id: number, @Body() updatebook: UpdateBook) {
   
  return await this.BookService.UpdateBook(id,updatebook)

  }

   @Delete('/DeleteById')
   async DelteById(@Param("id") id:number){
    return await this.BookService.GetById(id)

  }

   

}
