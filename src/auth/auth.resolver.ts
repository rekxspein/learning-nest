import { Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private service: AuthService) {}
  @Query(() => String)
  auth() {
    return this.service.signin();
  }
}
