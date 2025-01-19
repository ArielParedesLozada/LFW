import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:${import.meta.env.VITE_SERVER_PORT}/`,
    headers: {
        'Content-Type': 'application/json'
    },
})

export default api