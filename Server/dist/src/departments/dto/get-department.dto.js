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
exports.GetDepartmentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const response_common_dto_1 = require("../../commons/dto/response-common.dto");
class GetDepartmentResponseDto extends response_common_dto_1.BaseSuccessResponse {
    constructor(departments) {
        super();
        this.res.departments = departments;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: '에러 혹은 응답에 대한 메시지',
                example: 'true',
            },
            departments: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            description: '에러 혹은 응답에 대한 메시지',
                            example: 'true',
                        },
                        departmentIdx: {
                            type: 'integer',
                            description: 'pk',
                            example: 2,
                        },
                        name: {
                            type: 'string',
                            description: '학과명',
                            example: '미디어학과',
                        },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Object)
], GetDepartmentResponseDto.prototype, "res", void 0);
exports.GetDepartmentResponseDto = GetDepartmentResponseDto;
//# sourceMappingURL=get-department.dto.js.map