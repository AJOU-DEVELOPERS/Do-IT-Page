import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ThrowFailResponse } from 'src/commons/dto/response-common.dto';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (err || !user) {
      throw new ThrowFailResponse('유효한 토큰을 입력해주세요.');
     // throw new ThrowFailResponse(String(info));
    }
    return user;
  }
}
