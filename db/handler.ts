/*import mysql from 'mysql'
import credentials from './credentials'

export interface User {
    id: number,
    name: string,
    DNI: number,
    gender: string,
    birth: Date
}

const connection = mysql.createConnection(credentials)
connection.connect(err => {
    if (err)
        throw Error('Error connecting to MySQL\n' + err.stack)
})

export async function addUser(nUser: User): Promise<number> {
    const { id, name, DNI, gender, birth } = nUser;
    let rStatus: number;
    await connection.query(`INSERT INTO users (id, name, DNI, gender, birth)
        VALUES (${id}, ${name}, ${DNI}, ${gender}, ${birth});`,
        (err) => {
                if (err) {
                    console.log('Error while adding user to table')
                    rStatus = 1;
                } else {
                    console.log('Successfully inserted a user into table')
                    rStatus = 0;
                }
        }
    );
    return rStatus;
}

export async function listUsers(): Promise<Array<User>> {
    let retValue: Array<User>;
    await connection.query(`SELECT * FROM users ORDER BY 'name'`, (err, results) => {
        if (err) throw err;
        retValue = results
    });
    return retValue;
}*/
