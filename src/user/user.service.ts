import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import mysql from 'mysql2';
import credentials from '../credentials';

import { User } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    private connection;
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    async addUser(dto: UserDTO): Promise<any> {
        let user = dto as User;
        await this.usersRepository.save(user);
    }

    listUsers(): Promise<User[]> {
        return this.usersRepository
            .createQueryBuilder('user')
            .orderBy('name')
            .getMany();
    }

}
