export declare class UserService {
    getAll(): {
        id: number;
        name: string;
    }[];
    getUserById(id: number): {
        id: number;
        name: string;
    };
    getUserByName(name: string): {
        id: number;
        name: string;
    };
    saveUser(user: any): {
        id: number;
        name: string;
    }[];
}
