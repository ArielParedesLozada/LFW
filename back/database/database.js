import dotenv from "dotenv";

dotenv.config()

const database = {
    db_dialect: process.env.DATABASE_DIALECT,
    db_name: process.env.DATABASE_NAME,
    db_user: process.env.DATABASE_USER,
    db_password: process.env.DATABASE_PASSWORD,
    db_port: process.env.DATABASE_PORT,
    db_host: process.env.DATABASE_HOST
}

export {
    database
}