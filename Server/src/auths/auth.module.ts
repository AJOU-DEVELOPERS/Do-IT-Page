import { Module, CacheModule } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    CacheModule.register(),
    ConfigModule,
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (ConfigService: ConfigService) => ({
        secret: ConfigService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${ConfigService.get('JWT_EXPIRATION_TIME')}s`,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthsService],
})
export class AuthsModule {}
