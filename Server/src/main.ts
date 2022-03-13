import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '../config/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  await makeOrmConfig();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:4000',
      'http://localhost:3000',
      'http://211.110.23.222:3000',
      'http://www.do-it.kro.kr',
    ],
    credentials: true,
  });
  app.use(cookieParser());
  setupSwagger(app);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(4000);
}

async function makeOrmConfig() {}
bootstrap();
