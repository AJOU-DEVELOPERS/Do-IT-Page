import { MailerService } from '@nestjs-modules/mailer';
import { Cache } from 'cache-manager';
import { SendMailDto, VerifyMailDto } from './dto/mail-auth.dto';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthsService {
    private readonly mailerService;
    private cacheManager;
    private readonly jwtService;
    constructor(mailerService: MailerService, cacheManager: Cache, jwtService: JwtService);
    sendMail(SendMailDto: SendMailDto): Promise<BaseSuccessResponse>;
    verifyMail(verifyMailDto: VerifyMailDto): Promise<BaseSuccessResponse>;
    getCookieWithJwtToken(userIdx: number, userName: string, status: string): Promise<string>;
    validateUser(id: string, password: string): Promise<"secession" | {
        userIdx: number;
        userName: string;
        status: string;
    }>;
}
