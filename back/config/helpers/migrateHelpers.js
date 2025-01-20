import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

global.basePath = path.resolve("./back/");

const loadModels = async () => {
    const models = {};
    const modelsPath = path.join(global.basePath, "/models/");
    const files = await fs.readdir(modelsPath);

    for (const file of files) {
        if (file.endsWith(".js")) {
            const filePath = path.join(modelsPath, file);
            const module = await import(pathToFileURL(filePath).href);
            const modelClass = module.default 

            if (modelClass.init && typeof modelClass.init === "function") {
                models[modelClass.name] = modelClass;
            } else {
                console.warn(`El archivo ${file} no exporta un modelo válido.`);
            }
        }
    }

    return models;
};

const syncModels = async () => {
    const models = await loadModels();
    await Promise.all(
        Object.values(models).map((model) =>
            model.sync({ alter: true }) 
        )
    );
    console.log("All models synchronized successfully.");
};

export {
    syncModels
}