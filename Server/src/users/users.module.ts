import { Module, CacheModule, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  User,
  UserSocial,
} from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { AuthsModule } from 'src/auths/auth.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserSocial,
    ]),
    ConfigService,
    CacheModule.register(),
    AuthsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
