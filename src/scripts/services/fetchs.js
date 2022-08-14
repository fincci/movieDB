import { apiKey, baseURL } from "../variables"

const fetchDetails = async (id) => {
    const response = await fetch(`${baseURL}/movie/${id}?${apiKey}`)
    return await response.json()
}

const fetchType = async (type) => {
    const response = await fetch(`${baseURL}${type}&${apiKey}`)
    return await response.json()
}

export { fetchType, fetchDetails }
