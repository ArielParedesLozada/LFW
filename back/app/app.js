import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

global.basePath = path.resolve('./')

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hola papus Waza")
})

app.get('/sigma', (req, res) => {
    res.json({
        papu: "waza"
    })
})

export { app }