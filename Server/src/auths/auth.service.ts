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
@Injectable()
export class AuthsService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private connection: Connection,
  ) {}
  async sendMail(SendMailDto: SendMailDto) {
    const queryRunner = this.connection.createQueryRunner();
    try {
      let authNum: string = '';
      let cacheKey: string = '';
      await queryRunner.connect();
      const userInfo = await queryRunner.manager.findOne(User, {
        email: SendMailDto.email,
      });
      if (userInfo) return new BaseFailResponse('이미 존재하는 이메일입니다.');

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
        from: 'Do.IT.AJOU@gmail.com', // sender address
        subject: 'Do-It 인증 요청 메일입니다.', // Subject line
        html: '6자리 인증 코드 : ' + `<b> ${authNum}</b>`, // HTML body content
      });
      await this.cacheManager.set(cacheKey, authNum, { ttl: 180 });
      return { cacheKey: cacheKey };
    } catch (err) {
      console.log(err);
      return new BaseFailResponse();
    } finally {
      await queryRunner.release();
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
