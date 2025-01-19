
import express from "express";
import { ExampleController } from "../controllers/ExampleController.js";

const router = express.Router()
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const result = await ExampleController.select(id)
    res.json(result)
})

export default router
    