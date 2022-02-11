import { AuthsService } from './auth.service';
import { SendMailDto, VerifyMailDto } from './dto/mail-auth.dto';
export declare class AuthController {
    private readonly authsService;
    constructor(authsService: AuthsService);
    sendMail(sendMailDto: SendMailDto): Promise<{
        cacheKey: string;
    }>;
    verifyMail(verifyMailDto: VerifyMailDto): Promise<boolean>;
}
