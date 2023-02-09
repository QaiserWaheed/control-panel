import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Isignup, IVerify, ILogin } from './user.dto';

export class Singup implements Isignup {
  @ApiProperty({ default: 'Qaiser' })
  @IsNotEmpty()
  Username: string;

  @ApiProperty({ default: 'any@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class verifyEmail implements IVerify{
  @ApiProperty({ default: 'any@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @ApiProperty()
  @IsNotEmpty()
  otp: number;
}


export class Login implements ILogin{
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    Email: string;
  
    @ApiProperty()
    @IsNotEmpty()
    password: string;
  }


  export class FrogotPassword{
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

  }




  export class ResetPassword{
     
      
        @ApiProperty({ default: 'any@gmail.com' })
        @IsNotEmpty()
        @IsEmail()
        Email: string;
      

        @ApiProperty()
        @IsNotEmpty()
        otp: number;


        @ApiProperty()
        @IsNotEmpty()
        password: string;


      }
 