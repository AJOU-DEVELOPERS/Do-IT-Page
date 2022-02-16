import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { AuthsModule } from './auths/auth.module';
import { User } from './users/entities/user.entity';
import { Department } from './departments/entities/department.entity';
import { DepartmentsModule } from './departments/departments.module';
import { StudiesModule } from './studies/studies.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.dev'],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      // type: 'mysql',
      // host: process.env.DB_HOST,
      // port: 3306,
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_DATABASE,
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // synchronize: false,
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ajoulee1214',
      database: 'nesttest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.gmail.com',
          secure: false,
          auth: {
            user: process.env.EMAIL_AUTH_EMAIL,
            pass: process.env.EMAIL_AUTH_PASSWORD,
          },
        },
        defaults: {
          from: '"do-it" <kyi9470812@gmail.com>',
        },
        template: {
          dir: process.cwd() + '/template/',
          adapter: new HandlebarsAdapter(), // or new PugAdapter()
          options: {
            strict: true,
          },
        },
      }),
    }),
    UsersModule,
    AuthsModule,
    DepartmentsModule,
    StudiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
