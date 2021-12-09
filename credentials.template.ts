export default interface Credentials {
    host: string,       // e.g. localhost:3306
    user: string,       // e.g. nest-app
    password: string,   // your own password
    database: string    // must be 'nest_app'
}
