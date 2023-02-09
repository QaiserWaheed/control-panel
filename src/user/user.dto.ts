export interface Isignup {
  Username: string;

  Email: string;

  password: string;
}

export interface IVerify {
  Email: string;

  otp: number;
}

export interface ILogin {
  Email: string;

  password: string;
}


export interface IForgot{
    email: string
}



export interface IReset{
    Email: string
    otp : number
    password: string
}