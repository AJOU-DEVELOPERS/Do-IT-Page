import { AuthsService } from './auth.service';
import { SendMailDto, VerifyMailDto } from './dto/mail-auth.dto';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
export declare class AuthController {
    private readonly authsService;
    constructor(authsService: AuthsService);
    sendMail(sendMailDto: SendMailDto): Promise<BaseSuccessResponse>;
    verifyMail(verifyMailDto: VerifyMailDto): Promise<BaseSuccessResponse>;
}
