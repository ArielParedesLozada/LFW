import { app } from "./back/app/app.js";
import dotenv from "dotenv";

dotenv.config()
const port = process.env.VITE_SERVER_PORT || 5500

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})