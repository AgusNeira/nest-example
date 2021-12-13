import { Controller, Get, Post, Header, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';

import { User } from './user.entity';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @Header('type', 'text/json')
    async read(): Promise<Object> {
        return {
            users: await this.userService.listUsers()
        };
    }

    @Post()
    async insert(@Body() dto: UserDTO, @Res() res) {
        const ret = await this.userService.addUser(dto);
        console.log('added user: ', ret);
        return res.redirect('/');
    }
}
