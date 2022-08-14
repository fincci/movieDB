import React, { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { fetchDetails, fetchType } from "../../scripts/services/fetchs"
import { popular } from "../../scripts/variables"
import { MovieCard } from "../movie-card/movie-card"
import './movie-list.css'

const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const movieArray = await fetchType(popular)
            setMovies(movieArray.results)
        }
        fetchData()
    }, [])
    // console.log(movies); //LOG
    return (
        <ul className="movie-list">
            {
                movies.map((movie, index) => {
                    return (
                        <Link to={`/movie/${movie.id}`} key={index}>
                            <MovieCard movieInfo={movie} key={index} />
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export { MovieList }