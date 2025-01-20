
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

class Example extends Model{}

Example.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //Table Fields
}, {
    sequelize,
    timestamps: true,
    modelName: 'Example'
})

export default Example
    