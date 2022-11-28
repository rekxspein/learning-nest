import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      autoSchemaFile: true,
      driver: MercuriusDriver,
      graphiql: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
