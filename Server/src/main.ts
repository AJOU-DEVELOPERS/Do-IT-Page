import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '../config/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  await makeOrmConfig();
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe({
  	whitelist: true, 
    forbidNonWhitelisted: true, 
    transform: true, 
  }));
  await app.listen(3000);
}
async function makeOrmConfig() {}
bootstrap();
