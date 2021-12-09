import { Injectable } from '@nestjs/common';

import mysql from 'mysql2';
import credentials from '../credentials';

import User from '../interfaces/user';

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

    addUser(nUser: User): Promise<string> {
        return new Promise((resolve, reject) => {
            const { id, name, DNI, gender, birth } = nUser;
            this.connection.query(`INSERT INTO users (name, DNI, gender, birth)\
                                  VALUES (${name}, ${DNI}, ${gender}, ${birth});`,
            err => {
                if (err) reject('Error while adding user to table');
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
