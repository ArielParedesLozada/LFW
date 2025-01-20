import { syncModels } from "./helpers/migrateHelpers.js";

const args = process.argv

//npm run migrate:all

try {
    await syncModels()
} catch (error) {
    console.error("Error inseperado ", error)
}