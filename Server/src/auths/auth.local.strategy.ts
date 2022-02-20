// login전 id, password 검증
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import {  Injectable, UnauthorizedException  } from "@nestjs/common";
import { AuthsService } from "./auth.service";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor( readonly configService: ConfigService,
        private readonly AuthService : AuthsService
  ) {
  
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey : configService.get('JWT_SECRET')
      });
    }
  
    async validate(userId: string, password: string) : Promise<any> {
        const user = await this.AuthService.validateUser(userId, password)
        if(!user) throw new UnauthorizedException();
      return user;
    }
  }