import { MailerService } from '@nestjs-modules/mailer';
import { Cache } from 'cache-manager';
import { SendMailDto, VerifyMailDto } from './dto/mail-auth.dto';
export declare class AuthsService {
    private readonly mailerService;
    private cacheManager;
    constructor(mailerService: MailerService, cacheManager: Cache);
    sendMail(SendMailDto: SendMailDto): Promise<{
        cacheKey: string;
    }>;
    verifyMail(verifyMailDto: VerifyMailDto): Promise<boolean>;
}
