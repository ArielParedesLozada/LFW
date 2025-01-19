import fs from "fs/promises";
import path from "path";

global.basePath = path.resolve('./back/')

function controllerContent(model) {
    const text = `
import { ${model} } from "../models/${model}.js"
//Controller logic
//Example
const select = async (id) => {
    await ${model}.sync()
    const ${model}_item = await ${model}.findOne({
        where: {
            id: id
        }
    })
    if (${model}_item) {
        return json({
            ok: true,
            data: ${model}_item
        })
    } else {
        return json({
            ok: false,
            error: "Error"
        })     
    }
}
const ${model}Controller = {
    select,
}

export { ${model}Controller }
    `
    return text
}

function modelContent(model) {
    const text = `
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

class ${model} extends Model{}

${model}.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //Table Fields
}, {
    sequelize,
    timestamps: true,
    modelName: '${model}'
})

export {
    ${model}
}
    `
    return text
}

async function createFile(fileName, content, fileLocation) {
    try {
        const filePath = path.join( global.basePath, fileLocation, `${fileName}.js`)
        const file = await fs.open(filePath, 'w')
        await file.writeFile(content)
        await file.close()
        return true
    } catch (error) {
        console.error("Error ", error)
        return false
    }
}

async function parseFile(fileName, type) {
    let content;
    let fileLocation;
    let result;
    switch (type) {
        case "model":
            fileLocation = '/models/'
            content = modelContent(fileName)
            result = await createFile(fileName, content, fileLocation)
            break;
        case "controller":
            fileLocation = '/controllers/'
            content = controllerContent(fileName)
            result = await createFile(`${fileName}Controller`, content, fileLocation)
            break;
        default:
            result = false
            break;
    }
    return result
}

export {
    parseFile,
}