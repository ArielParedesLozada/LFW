import fs from "fs/promises";
import path from "path";

global.basePath = path.resolve('./back/')

function controllerContent(model) {
    const text = `
import ${model} from "../models/${model}.js"
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
        return {
            ok: true,
            data: ${model}_item
        }
    } else {
        return {
            ok: false,
            error: "Error"
        }    
    }
}
const ${model}Controller = {
    select,
}

export default ${model}Controller
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

export default  ${model}
    `
    return text
}

function routeContent(model) {
    const text = `
import express from "express";
import ${model}Controller from "../controllers/${model}Controller.js";

const router = express.Router()
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const result = await ${model}Controller.select(id)
    res.json(result)
})

export default router
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
        case "route":
            fileLocation = '/routes/'
            content = routeContent(fileName)
            result = await createFile(`${fileName}Route`, content, fileLocation)
            break;
        case "all":
            fileLocation = '/models/'
            content = modelContent(fileName)
            result = await createFile(fileName, content, fileLocation)
            fileLocation = '/controllers/'
            content = controllerContent(fileName)
            result = result && (await createFile(`${fileName}Controller`, content, fileLocation))
            fileLocation = '/routes/'
            content = routeContent(fileName)
            result = result && (await createFile(`${fileName}Route`, content, fileLocation))
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