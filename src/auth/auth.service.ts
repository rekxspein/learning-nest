import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {
      msg: 'I am SignUp',
    };
  }

  signin() {
    return {
      msg: 'I am Tomba',
    };
  }
}
