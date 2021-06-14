import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApartmentsModule } from './apartments/apartments.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { UserFavoritesModule } from './user-favorites/user-favorites.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(),
  GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: join(`${process.cwd()}/schema.gql`),
  }), UsersModule, ApartmentsModule, UserFavoritesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
