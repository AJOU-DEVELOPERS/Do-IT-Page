"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthsModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_jwt_strategy_1 = require("./auth.jwt.strategy");
const auth_local_strategy_1 = require("./auth.local.strategy");
let AuthsModule = class AuthsModule {
};
AuthsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_1.CacheModule.register(),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (ConfigService) => ({
                    secret: ConfigService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: `${ConfigService.get('JWT_EXPIRATION_TIME')}`,
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthsService, auth_local_strategy_1.LocalStrategy, auth_jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthsService],
    })
], AuthsModule);
exports.AuthsModule = AuthsModule;
//# sourceMappingURL=auth.module.js.map