import { Sequelize } from "sequelize";
import { database } from "../database/database.js";

const sequelize = new Sequelize(database.db_name, database.db_user, database.db_password, {
    host: database.db_host,
    dialect: database.db_dialect,
    port: database.db_port
})

export {
    sequelize,
}