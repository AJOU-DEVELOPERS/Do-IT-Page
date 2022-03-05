import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Res,
  ParseIntPipe,
  Request,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthsService } from 'src/auths/auth.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import {
  BaseSuccessResponse,
  ResultSuccessResponse,
} from 'src/commons/dto/response-common.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { LocalAuthGuard } from 'src/auths/auth.local.guard';
import { duplicateCheckUserId } from './dto/duplicateCheck-userId.dto';
import { JwtAuthGuard } from 'src/auths/auth.jwt.guard';
@Controller('users')
@ApiTags('User API')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authsService: AuthsService,
  ) {}
  @HttpCode(200)
  @Post('sign-up')
  @ApiOperation({ summary: '회원가입 API', description: 'true false 반환' })
  @ApiBody({ type: SignupUserDto })
  @ApiOkResponse({
    description: '회원가입 성공',
    type: BaseSuccessResponse,
  })
  create(@Body() createUserDto: SignupUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('sign-in')
  @ApiOperation({
    summary: '유저 로그인',
    description: '유저가 로그인하는 api입니다.',
  })
  @ApiBody({ type: LoginUserDto })
  @ApiOkResponse({ description: '로그인 성공', type: BaseSuccessResponse })
  async logIn(
    @Req() req,
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const cookie = await this.usersService.login(loginUserDto);
    res.cookie('Bearer', cookie);
    return new ResultSuccessResponse(req.user);
  }

  @ApiOperation({
    summary: '유저 아이디 중복 확인',
    description: '유저 아이디 중복확인 api.',
  })
  @Post('duplicateCheck')
  @ApiOkResponse({ description: '중복확인 성공', type: BaseSuccessResponse })
  @ApiBody({ type: duplicateCheckUserId })
  async checkUserDuplicate(@Body() id: string) {
    return this.usersService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: '동아리 신청',
    description: '동아리 신청 api.',
  })
  @ApiOkResponse({ description: '신청 성공', type: BaseSuccessResponse })
  @Post('sign-up/club')
  async signUpClub(@Req() req) {
    return this.usersService.signUpClub(req.user.userIdx);
  }
}
