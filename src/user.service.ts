import { Injectable } from '@nestjs/common';

import mysql from 'mysql2';
import credentials from '../credentials';

import User from '../interfaces/user';
import CreateUserObj from './create-user-obj';

@Injectable()
export class UserService {
    private connection;
    constructor() {
        this.connection = mysql.createConnection(credentials);
        this.connection.connect(err => {
            if (err) console.log('error while connecting to database', err);
            else console.log('successfully connected to database');
        });
    }

    addUser(nUser: CreateUserObj): Promise<string> {
        return new Promise((resolve, reject) => {
            const { name, DNI, gender, birth } = nUser;
            this.connection.query(`INSERT INTO users (name, DNI, gender, birth)\
                                  VALUES ('${name}', ${DNI}, '${gender}', '${birth}');`,
            err => {
                if (err) {
                    console.log(err);
                    reject('Error while adding user to table');
                }
                else resolve('Successfully added user into table');
            });
        });
    }

    listUsers(): Promise<Array<User>> {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM users ORDER BY 'name';`, (err, results) => {
                if (err) reject(err);
                else resolve(results as Array<User>);
            });
        });
    }

}
