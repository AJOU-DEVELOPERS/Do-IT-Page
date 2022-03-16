import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '../config/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  await makeOrmConfig();
  let port = 4000;
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
  port = process.env.NODE_ENV === "dev" ? port : parseInt(process.env.prod);

  await app.listen(port);
}

async function makeOrmConfig() {}
bootstrap();
