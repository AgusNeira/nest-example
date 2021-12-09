import { Controller, Get, Post, Header, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';

import User from '../interfaces/user';
import CreateUserObj from './create-user-obj';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @Header('type', 'text/json')
    async read(): Promise<any> {
        const users = await this.userService.listUsers();
        return { users };
    }

    @Post()
    async insert(@Body() createUserObj: CreateUserObj, @Res() res) {
        const ret = await this.userService.addUser(createUserObj);
        console.log('added user: ', ret);
        return res.redirect('/');
    }
}
