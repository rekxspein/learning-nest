import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'I am SignUp';
  }

  signin() {
    return 'I am Tomba';
  }
}
