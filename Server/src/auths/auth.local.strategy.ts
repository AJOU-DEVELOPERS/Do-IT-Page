// login전 id, password 검증
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { ThrowFailResponse } from 'src/commons/dto/response-common.dto';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly AuthService: AuthsService) {
    super({ usernameField: 'id' });
  }

  async validate(id: string, password: string): Promise<any> {
    const user = await this.AuthService.validateUser(id, password);
    if (!user)
      throw new ThrowFailResponse('아이디와 비밀번호를 다시 입력해주세요.');

    return user;
  }
}
