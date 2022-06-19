/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {} 

    @Get()
    @Redirect('http://localhost:3000/user/new', 302)
    getUser(){
        return '';
    }

    @Get('new')
    getUserV2(){
        return 'redirected successfully';
    }

    @Post()
    saveUser(){
        return 'Created';
    }
}
