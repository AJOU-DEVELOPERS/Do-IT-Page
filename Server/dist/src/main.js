"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("../config/swagger");
async function bootstrap() {
    await makeOrmConfig();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, swagger_1.setupSwagger)(app);
    await app.listen(3000);
}
async function makeOrmConfig() {
}
bootstrap();
//# sourceMappingURL=main.js.map