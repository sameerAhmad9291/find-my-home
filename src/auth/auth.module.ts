import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

const expiresInMinutes = parseInt(process.env.JWT_EXPIRES_IN_MINUTES, 10) || 20;

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      privateKey: process.env.JWT_PRIVATE_KEY,
      publicKey: process.env.JWT_PUBLIC_KEY,
      signOptions: { expiresIn: `${expiresInMinutes}m` },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, GqlAuthGuard, LocalAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}