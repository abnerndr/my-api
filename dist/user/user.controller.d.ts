import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): string;
    getUser(id: number): {
        id: number;
        name: string;
    };
    getUserV2(): string;
    saveUser(): string;
}
