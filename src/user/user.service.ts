import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IForgot, ILogin, IReset, Isignup, IVerify } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userepo: Repository<User>) {}

  async Singup(data: Isignup) {
    const finduser = await this.userepo.findOneBy({ Email: data.Email });
    if (finduser) {
      throw new HttpException('Email Already Exist', HttpStatus.NOT_FOUND);
    }

    const SaltorRounds = 10;

    const userpass = data.password;
    data.password = await bcrypt.hash(userpass, SaltorRounds);

    const otp = Math.floor(100000 + Math.random() * 900000);

    const newuser = this.userepo.create({
      UserName: data.Username,
      Email: data.Email,
      Password: data.password,
      otp: otp,
    });

    this.userepo.save(newuser);
    return otp;
  }

  async VerifyEmail(data: IVerify) {
    const user = await this.userepo.findOneBy({ Email: data.Email });
    if (!user) {
      throw new HttpException('Email not found', HttpStatus.NOT_FOUND);
    }

    if (data.otp != user.otp) {
      throw new HttpException('Otp is not correct', HttpStatus.NOT_FOUND);
    }

    user.otp = null;
    user.status = 'Approved';

    this.userepo.save(user);
    return 'Email Verified';
  }


async Login(data: ILogin){
    
const finduser = await this.userepo.findOneBy({Email: data.Email})
if (!finduser){
    throw new HttpException('user Not Registered!', HttpStatus.NOT_FOUND);
}

const IsMatch = await bcrypt.compare(data.password,  finduser.Password )
if (!IsMatch){
    throw new HttpException('Password Not correct!', HttpStatus.NOT_FOUND);
}

return finduser

}


async Forgot(data: IForgot){
    const user = await this.userepo.findOneBy({Email: data.email})
    if (!user){
        throw new HttpException('user Not Registered!', HttpStatus.NOT_FOUND);
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    user.otp = otp;
    this.userepo.save(user)
    return otp;

}

async Reset(data: IReset){
    const user = await this.userepo.findOneBy({Email: data.Email})
    if(!user){
        throw new HttpException("User Not Found", HttpStatus.NOT_FOUND)
    }
    if(user.otp != data.otp){
        throw new HttpException("OTP Is Not Correct", HttpStatus.NOT_FOUND)
    }

   const SaltOrRounds = 10;

user.Password =  await bcrypt.hash(data.password, SaltOrRounds)

   user.otp = null

   this.userepo.save(user)
return "password reset successfully!"

}


}
