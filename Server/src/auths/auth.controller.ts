import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthsService } from './auth.service';
import { SendMailDto, VerifyMailDto } from './dto/mail-auth.dto';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';
import { BaseResponse } from 'src/commons/dto/response-common.dto';
@Controller('auths')
@ApiTags('Auth API')
export class AuthController {
  constructor(private readonly authsService: AuthsService) {}
  @Post('req-mail')
  @ApiOperation({
    summary: '메일 발송 요청 API',
    description: 'cacheKey 반환',
  })
  @ApiOkResponse({ description: '메일 발송 성공', type: BaseResponse })
  async sendMail(@Body() sendMailDto: SendMailDto) {
    return await this.authsService.sendMail(sendMailDto);
  }
  @Post('verify-mail')
  @ApiOperation({
    summary: '메일 인증번호 확인 API',
    description: 'true false 반환',
  })
  @ApiOkResponse({ description: '메일 인증 확인 성공', type: BaseResponse })
  async verifyMail(@Body() verifyMailDto: VerifyMailDto) {
    return await this.authsService.verifyMail(verifyMailDto);
  }
}
