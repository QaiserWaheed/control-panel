import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/books.entity';
 

const DB = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  entities: [User, Book],
  synchronize: true,
});

@Module({
  imports: [DB, UserModule, BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
