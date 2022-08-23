import { apiKey, baseURL } from "../variables"

const fetchDetails = async (id) => {
    const response = await fetch(`${baseURL}/movie/${id}?${apiKey}`)
    return await response.json()
}

const fetchType = async (type, page) => {
    const response = await fetch(`${baseURL}${type}&${apiKey}&page=${page}`)
    const movie = await response.json()
    return movie.results
}

export { fetchType, fetchDetails }
