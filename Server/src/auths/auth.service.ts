import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Cache } from 'cache-manager';
import { SendMailDto, VerifyMailDto } from './dto/mail-auth.dto';
import { Repository, Connection } from 'typeorm';
import {
  BaseSuccessResponse,
  ResultSuccessResponse,
  BaseFailResponse,
} from 'src/commons/dto/response-common.dto';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
// import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AuthsService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    //private connection: Connection,
    private readonly jwtService: JwtService,
    //@InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async sendMail(SendMailDto: SendMailDto) {
    try {
      let authNum: string = '';
      let cacheKey: string = '';
      const userInfo = await User.findOne({ email: SendMailDto.email });
      if (userInfo) return new BaseFailResponse('이미 존재하는 이메일입니다.');

      const chars: string =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
      for (let i = 0; i < 6; i++) {
        authNum += Math.floor(Math.random() * 10);
        const rnum = Math.floor(Math.random() * chars.length);
        cacheKey += chars.substring(rnum, rnum + 1);
      }
      await this.mailerService.sendMail({
        to: SendMailDto.email, // list of receivers
        from: 'Do.IT.AJOU@gmail.com', // sender address
        subject: 'Do-It 인증 요청 메일입니다.', // Subject line
        html: '6자리 인증 코드 : ' + `<b> ${authNum}</b>`, // HTML body content
      });
      await this.cacheManager.set(cacheKey, authNum, { ttl: 180 });
      return new ResultSuccessResponse({ cacheKey: cacheKey });
    } catch (err) {
      console.log(err);
      return new BaseFailResponse();
    }
  }
  async verifyMail(verifyMailDto: VerifyMailDto) {
    const cacheValue: number = await this.cacheManager.get(
      verifyMailDto.cacheKey,
    );
    if (cacheValue !== verifyMailDto.authNum) return new BaseFailResponse();
    return new BaseSuccessResponse();
  }

  async getCookieWithJwtToken(userId: number) {
    const payload: {
      userId: number;
    } = { userId };
    const token = this.jwtService.sign(payload);
    
    return token;
  }
  async validateUser(email: string, password: string){
    const userInfo = await User.findByLogin(email, password)
    if(!userInfo)
    return null;
    const result = {
      userId : userInfo.userIdx
    }
    return result
  }
}
