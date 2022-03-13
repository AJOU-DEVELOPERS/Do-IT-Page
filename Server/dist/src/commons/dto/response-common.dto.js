"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrowFailResponse = exports.BaseFailResponse = exports.ResultSuccessResponse = exports.BaseSuccessResponse = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
class BaseSuccessResponse {
    constructor(message = true) {
        this.isSuccess = true;
        this.code = 200;
        this.res = {};
        this.res.message = message;
    }
    setMessage(message = true) {
        this.res.message = message;
    }
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        description: '성공 여부 요청 에러, 데이터 베이스 에러 제외하고 모두 true',
        example: 'true',
    }),
    __metadata("design:type", Boolean)
], BaseSuccessResponse.prototype, "isSuccess", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        description: '응답 코드',
        example: 200,
    }),
    __metadata("design:type", Number)
], BaseSuccessResponse.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: '에러 혹은 응답에 대한 메시지',
                example: 'true',
            },
        },
    }),
    __metadata("design:type", Object)
], BaseSuccessResponse.prototype, "res", void 0);
exports.BaseSuccessResponse = BaseSuccessResponse;
class ResultSuccessResponse extends BaseSuccessResponse {
    constructor(res) {
        super();
        this.res = res;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ResultSuccessResponse.prototype, "res", void 0);
exports.ResultSuccessResponse = ResultSuccessResponse;
class BaseFailResponse extends BaseSuccessResponse {
    constructor(message = '실패') {
        super();
        this.isSuccess = false;
        this.code = 400;
        this.res.message = message;
    }
}
exports.BaseFailResponse = BaseFailResponse;
class ThrowFailResponse extends common_1.HttpException {
    constructor(message) {
        super({
            isSuccess: false,
            code: common_1.HttpStatus.BAD_REQUEST,
            res: {
                message: message,
            },
        }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.ThrowFailResponse = ThrowFailResponse;
//# sourceMappingURL=response-common.dto.js.map