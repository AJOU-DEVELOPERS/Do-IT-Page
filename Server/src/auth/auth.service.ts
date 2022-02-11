import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Cache } from 'cache-manager';
import { SendMailDto, VerifyMailDto } from './dto/mail-auth.dto';

@Injectable()
export class AuthsService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async sendMail(SendMailDto: SendMailDto) {
    try {
      let authNum: string = '';
      let cacheKey: string = '';
      const chars: string =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
      for (let i = 0; i < 6; i++) {
        authNum += Math.floor(Math.random() * 10);
        const rnum = Math.floor(Math.random() * chars.length);
        cacheKey += chars.substring(rnum, rnum + 1);
      }
      const number: string = authNum;
      await this.mailerService.sendMail({
        to: SendMailDto.email, // list of receivers
        from: 'kyi9470812@gmail.com', // sender address
        subject: '이메일 인증 요청 메일입니다.', // Subject line
        html: '6자리 인증 코드 : ' + `<b> ${authNum}</b>`, // HTML body content
      });
      await this.cacheManager.set(cacheKey, authNum, { ttl: 180 });
      return { cacheKey: cacheKey };
    } catch (err) {
      console.log(err);
    }
  }
  async verifyMail(verifyMailDto: VerifyMailDto) {
    const cacheValue: number = await this.cacheManager.get(
      verifyMailDto.cacheKey,
    );
    if (cacheValue !== verifyMailDto.authNum) return false;
    return true;
  }
}
