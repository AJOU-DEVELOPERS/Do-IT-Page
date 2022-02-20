import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '../config/swagger';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  await makeOrmConfig();
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  setupSwagger(app);
  await app.listen(3000);
}
async function makeOrmConfig() {}
bootstrap();
