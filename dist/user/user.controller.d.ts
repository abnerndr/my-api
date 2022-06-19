import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(): string;
    getUserV2(): string;
    saveUser(): string;
}
