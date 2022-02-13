import { Module, CacheModule } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { AuthController } from './auth.controller';
@Module({
  imports: [CacheModule.register()],
  controllers: [AuthController],
  providers: [AuthsService],
})
export class AuthsModule {}
