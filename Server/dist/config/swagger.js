"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Do-It API Docs')
        .setDescription('blah - blah')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map