import { apiKey, baseURL } from "../variables"

const fetchType = async (type) => {
    const response = await fetch(`${baseURL}${type}&${apiKey}`)
    return await response.json()
}

export { fetchType }
