import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(id: number): {
        id: number;
        name: string;
    };
    getUsers(name: string): {
        id: number;
        name: string;
    } | {
        id: number;
        name: string;
    }[];
    getUserV2(): string;
    saveUser(user: any): {
        id: number;
        name: string;
    }[];
}
