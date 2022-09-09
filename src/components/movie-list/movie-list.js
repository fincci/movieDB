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
    const [searchText, setSearchText] = useState('')

    const changeText = (e) => {
        setSearchText(e.target.value.toLowerCase())
    }

    const searchSubmit = () => {
        return searchText
    }

    useEffect(() => {
        const fetchData = async () => {
            if (searchText === '') {
                const movieArray = await fetchType(popular, page)
                setMovies([...movies, ...movieArray])
            } else {
                const movieArray = await fetchSearch(searchText, page)
                setMovies([...movieArray])
            }
        }
        fetchData()
    }, [page, searchText])

    const addMovies = () => {
        setPage(page = page + 1)
    }

    return (
        <>
            <Header onChange={changeText} searchSubmit={searchSubmit}/>
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
        </>
    )
}

export { MovieList }