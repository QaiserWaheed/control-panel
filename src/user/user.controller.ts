import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { FrogotPassword, Login, ResetPassword, Singup, verifyEmail } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post('/signup')
  async userSignup(@Body() data: Singup) {
    return this.UserService.Singup(data);
  }

  @Post('/Email-Verification')
  async emailVerification(@Body() data: verifyEmail) {
    return this.UserService.VerifyEmail(data);
  }


  @Post('/Login')
  async Login(@Body() data: Login) {
    return this.UserService.Login(data);
  }


  @Post('/Forgot')
  async Forgot(@Body() data: FrogotPassword) {
    return this.UserService.Forgot(data)
  }



  @Post('/Reset')
  async Reset(@Body() data: ResetPassword) {
    return this.UserService.Reset(data)
  }
}
