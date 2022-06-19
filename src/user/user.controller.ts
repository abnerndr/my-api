import { Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {} 

    @Get()
    @Redirect('http://localhost:3000/user/new', 302)
    getUsers(){
        return '';
    }

    @Get(':id')
    getUser(@Param('id') id: number){
        return this.userService.getUserById(Number(id));
    }

    @Get('new')
    getUserV2(){
        return 'redirected successfully'
    }

    @Post()
    saveUser(){
        return 'Created';
    }
}
