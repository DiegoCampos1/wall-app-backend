import { Module } from '@nestjs/common';
import { UsersModule } from './../users/users.module';
import { AuthService } from './shared/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './shared/local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
