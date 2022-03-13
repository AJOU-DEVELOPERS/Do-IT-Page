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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const response_common_dto_1 = require("../commons/dto/response-common.dto");
const auth_service_1 = require("../auths/auth.service");
let UsersService = class UsersService {
    constructor(userRepository, connection, authsService) {
        this.userRepository = userRepository;
        this.connection = connection;
        this.authsService = authsService;
    }
    async createUser(createUserDto) {
        const user = new user_entity_1.User();
        const queryRunner = this.connection.createQueryRunner();
        user.studentId = createUserDto.studentId;
        user.name = createUserDto.name;
        user.phoneNumber = createUserDto.phoneNumber;
        user.password = createUserDto.password;
        user.email = createUserDto.email;
        user.id = createUserDto.id;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const emailInfo = await queryRunner.manager.findOne(user_entity_1.User, {
                email: user.email,
            });
            const idInfo = await queryRunner.manager.findOne(user_entity_1.User, {
                id: user.id,
            });
            if (emailInfo || idInfo)
                return new response_common_dto_1.BaseSuccessResponse('이미 존재하는 계정입니다.');
            await queryRunner.manager.save(user);
            await queryRunner.commitTransaction();
            return new response_common_dto_1.BaseSuccessResponse();
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new response_common_dto_1.BaseFailResponse('회원가입에 실패하였습니다.');
        }
        finally {
            await queryRunner.release();
        }
    }
    async findById(id) {
        const user = await user_entity_1.User.findOne({ where: id });
        if (user)
            return new response_common_dto_1.BaseSuccessResponse('이미 존재하는 아이디입니다.');
        return new response_common_dto_1.BaseSuccessResponse();
    }
    async findAll() {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        try {
            const userList = await user_entity_1.User.find({});
            return new response_common_dto_1.ResultSuccessResponse(userList);
        }
        catch (error) {
            console.log(error);
            return new response_common_dto_1.BaseFailResponse('유저 목록을 불러오는데 실패했습니다');
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection,
        auth_service_1.AuthsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map