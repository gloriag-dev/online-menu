import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getUrl } from "../utils"

export const AuthLoginCallback = () => {
    const navigate = useNavigate()

    const navigateToRoute = async () => {
        try {
            const url = getUrl()
            console.log(url)
            if (url) {
                navigate(url)
            } else {
                console.warn("Manca l'url")
            }
        } catch (e) {
            console.error("non trovo url", e)
        }
    }

    useEffect(() => {
        navigateToRoute()
    }, [])

    return <div>Redirecting...</div>
}
