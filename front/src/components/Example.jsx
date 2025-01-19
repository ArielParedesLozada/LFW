import { useEffect } from "react";
import api from "../api.js";

function Example() {
    const fetchMessage = async () => {
        try {
            const result = await api.get('/example')
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
            <a href="">Hola Papus</a>
        </>
    )
}

export default Example