// login전 id, password 검증
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import {  Injectable, UnauthorizedException  } from "@nestjs/common";
import { AuthsService } from "./auth.service";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor( 
        private readonly AuthService : AuthsService
  ) {
      super({ usernameField : 'id'});
    }
  
    async validate(id: string, password: string) : Promise<any> {
        
        const user = await this.AuthService.validateUser(id, password)
        if(!user) {
            throw new UnauthorizedException();}
      return user;
    }
  }