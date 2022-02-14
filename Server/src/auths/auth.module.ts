import { Module, CacheModule, forwardRef } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    CacheModule.register(),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (ConfigService: ConfigService) => ({
        secret: ConfigService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${ConfigService.get('JWT_EXPIRATION_TIME')}`,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthsService],
  exports: [AuthsService],
})
export class AuthsModule {}
