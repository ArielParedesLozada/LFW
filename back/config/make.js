import { parseFile } from "./helpers.js";

const args = process.argv

//npm run make controller name

async function parse(argumentos) {
    if (argumentos.length < 4) {
        console.error(`Error: Argumentos insuficientes`);
        return false
    }

    let comando = argumentos[1]
    let opcion = argumentos[2]
    let nombre = argumentos[3]
    let result;

    console.log("Comandos")
    result = await parseFile(nombre, opcion)
    return result
}

try {
    let response = await parse(args)
    if (response) {
        console.log("Comando ejecutado con exito");
    } else {
        console.error("Error al ejecutar el comando");
    }
} catch (error) {
    console.error(`Error inesperado ${error}`);
        
}