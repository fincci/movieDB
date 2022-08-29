import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { fetchSearch, fetchType } from "../../scripts/services/fetchs"
import { popular } from "../../scripts/variables"
import { Button } from "../button/button"
import { Header } from "../header/header"
import { MovieCard } from "../movie-card/movie-card"
import './movie-list.css'

const MovieList = () => {

    const [movies, setMovies] = useState([])
    let [page, setPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const movieArray = await fetchType(popular, page)
            setMovies([...movies, ...movieArray])
        }
        fetchData()
    }, [page])

    const addMovies = () => {
        setPage(page = page + 1)
    }

    return (
        <section className="movie-list-wrapper">
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
            <Button action={addMovies} text='Show more' />
        </section>
    )
}

export { MovieList }