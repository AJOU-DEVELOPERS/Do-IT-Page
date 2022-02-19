import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '../config/swagger';
async function bootstrap() {
  await makeOrmConfig();

  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(4000);
}

async function makeOrmConfig() {}
bootstrap();
