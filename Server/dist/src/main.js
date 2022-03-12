"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("../config/swagger");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    await makeOrmConfig();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:4000', 'http://localhost:3000'],
        credentials: true,
    });
    app.use(cookieParser());
    (0, swagger_1.setupSwagger)(app);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(4000);
}
async function makeOrmConfig() { }
bootstrap();
//# sourceMappingURL=main.js.map