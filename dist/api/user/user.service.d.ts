import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
export declare class UserService {
    private readonly repository;
    getUser(id: any): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
}
