import { useEffect } from "react";
import api from "../api.js";

function Example() {
    const apiUrl = import.meta.env.VITE_SERVER_PORT;
    const fetchMessage = async () => {
        try {
            const result = await api.get('/sigma')
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchMessage()
    }, [])
    
    return (
        <>
        <div>
            <a href="">Hola Papus</a>
        </div>
        <p>
            Como estan papus {apiUrl} .
        </p>
        </>
    )
}

export default Example