import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signp() {
    return this.authService.signup();
  }

  @Post('signIn')
  signun() {
    return this.authService.signin();
  }
}
