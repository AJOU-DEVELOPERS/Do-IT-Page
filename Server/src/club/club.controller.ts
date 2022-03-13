import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auths/auth.jwt.guard';
import { Roles } from 'src/auths/roles.decorator';
import { RolesGuard } from 'src/auths/roles.guard';
import { BaseSuccessResponse } from 'src/commons/dto/response-common.dto';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { GetClubUserListResponse } from './dto/get-clubUser.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@Controller('clubs')
@ApiTags('Club API')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}
  // @Roles('L')
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  // @ApiOperation({
  //   summary: '동아리 신청',
  //   description: '동아리 신청 api.',
  // })
  // @ApiOkResponse({ description: '신청 성공', type: BaseSuccessResponse })
  // @Post('sign-up')
  // create(@Req() req) {
  //   return this.clubService.create(req.user.userIdx);
  // }

  @Roles('M')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: '동아리 승인',
    description: '동아리 승인 api.',
  })
  @ApiOkResponse({ description: '승인 성공', type: BaseSuccessResponse })
  @ApiParam({ name: 'clubIdx', required: true })
  @Post('accept/:clubIdx')
  accept(@Req() req, @Param() param) {
    const clubIdx = param.clubIdx;
    return this.clubService.acceptClub(param.clubIdx);
  }

  @Roles('M')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: '동아리 거절',
    description: '동아리 거절 api.',
  })
  @ApiOkResponse({ description: '거절 성공', type: BaseSuccessResponse })
  @ApiParam({ name: 'clubIdx', required: true })
  @Post('refuse/:clubIdx')
  refuse(@Req() req, @Param() param) {
    const clubIdx = param.clubIdx;
    return this.clubService.refuseClub(clubIdx);
  }

  @Roles('M')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Bearer')
  @ApiOperation({
    summary: '동아리 회원 목록',
    description: '동아리 회원 목록 api.',
  })
  @ApiOkResponse({ description: ' 성공', type: GetClubUserListResponse })
  @Get()
  findAll() {
    return this.clubService.findClubList();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.clubService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
  //   return this.clubService.update(+id, updateClubDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.clubService.remove(+id);
  // }
}
