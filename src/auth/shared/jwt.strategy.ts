import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //take the token of header
      ignoreExpiration: false,
      secretOrKey: process.env.JWT,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
