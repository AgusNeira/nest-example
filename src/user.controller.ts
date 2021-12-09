import { Controller, Get, Header } from '@nestjs/common';
import { UserService } from './user.service';

import User from '../interfaces/user';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @Header('type', 'text/json')
    async read(): Promise<any> {
        const users = await this.userService.listUsers();
        return { users };
    }
}
