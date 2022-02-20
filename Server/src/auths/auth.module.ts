import { Module, CacheModule, forwardRef } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './auth.jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './auth.local.strategy';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ]),
    CacheModule.register(),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        secret: ConfigService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${ConfigService.get('JWT_EXPIRATION_TIME')}`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthsService, LocalStrategy, JwtStrategy],
  exports: [AuthsService, LocalStrategy, JwtStrategy],
})
export class AuthsModule {}
