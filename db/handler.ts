import mysql from 'mysql'
import credentials from './credentials'

export interface User {
    id: number,
    name: string,
    dni: number,
    gender: string,
    date: Date
}

const connection = mysql.createConnection(credentials)
connection.connect(err => {
    if (err)
        throw Error('Error connecting to MySQL\n' + err.stack)
})

export async function addUser(nUser: User): number {
    const { id, name, DNI, gender, birth } = nUser;
    await connection.query(`INSERT INTO users (id, name, DNI, gender, birth)
        VALUES (${id}, ${name}, ${DNI}, ${gender}, ${birth});`,
        (err) => {
                if (err) console.log('error while adding user to table')
                else console.log('Successfully inserted a user into table')
        });
}

export async function listUsers(): Array<User> {
    let retValue: Array<User>;
    await connection.query(`SELECT * FROM users ORDER BY 'name'`, (err, results) => {
        if (err) throw err;
        retValue = results
    });
    return retValue;
}
