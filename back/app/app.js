import express, { response } from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

import ExampleRoutes from "../routes/ExampleRoute.js";

global.basePath = path.resolve('./')

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hola papus Waza")
})

app.use('/example', ExampleRoutes)

export { app }