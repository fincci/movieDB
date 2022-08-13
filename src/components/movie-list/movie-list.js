import { useEffect, useState } from "react"
import { fetchDiscover } from "../../scripts/services/fetchs"
import { apiKey, baseURL, imgURL } from "../../scripts/variables"
import { MovieCard } from "../movie-card/movie-card"

const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const movieArray = await fetchDiscover('discover/movie')
            setMovies(movieArray.results)
        }
        fetchData()
    }, [])
    console.log(movies); //LOG
    return (
        <ul>
            {
                movies.map((movie, index) => {
                    return (
                        <MovieCard movieInfo={movie} key={index} />
                    )
                })
            }
        </ul>
    )
}

export { MovieList }