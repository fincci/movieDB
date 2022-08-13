import { apiKey, baseURL, discover } from "../variables"

const fetchDiscover = async (type) => {
    const response = await fetch(`${baseURL}${type}${apiKey}`)
    return await response.json()
}

export { fetchDiscover }
