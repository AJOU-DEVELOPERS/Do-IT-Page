import { Strategy } from 'passport-local';
import { AuthsService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly AuthService;
    constructor(AuthService: AuthsService);
    validate(id: string, password: string): Promise<any>;
}
export {};
