import { useEffect } from "react";
import api from "../api.js";
import { useParams } from "react-router-dom";

function Example() {
    const { id } = useParams()
    const fetchMessage = async () => {
        try {
            const result = await api.get(`/example/${id}`)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchMessage()
    })

    return (
        <>
            <a href="">Hola Papus</a>
        </>
    )
}

export default Example