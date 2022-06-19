import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';

const users = [
    { 
    id: 1,
    name: 'Marcus'
    },
    { 
    id: 2,
    name: 'Kate'
    }
]

@Injectable()
export class UserService {
    getUser() {
        return 'hi user!!';
    }

    getUserById(id: number) {
        const findUser = users.find((u) => u.id === id)

        if(!findUser){
            throw new NotFoundException('user does not exist')
        }

        return findUser;
    }
}
