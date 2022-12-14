import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchDetails } from "../../scripts/services/fetchs"
import { imdbURL, imgURL } from '../../scripts/variables'
import arrow from '../../assets/images/arrow.png'
import styled, { css } from 'styled-components'
import './movie-info.css'
import { ImdbIcon } from "../../assets/svgs/imdb-svg"

const MovieInfo = () => {

    const [movieInfo, setMovieInfo] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const movieData = async () => {
            const data = await fetchDetails(id)
            setMovieInfo(data)
        }
        movieData()
    }, [])

    const timeConvert = (n) => {
        let hours = (n / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return `${rhours}h ${rminutes} min`
    }

    const { backdrop_path, original_title, title, release_date, genres, overview, runtime, vote_average, spoken_languages, imdb_id } = movieInfo



    if (Object.keys(movieInfo).length !== 0) {
        // console.log(movieInfo); //log
        return (
            <Section backdrop={backdrop_path} className="movie-info">
                <Link className="link-back" to='/'>
                    <img className="arrow" src={arrow} alt='Back' />
                </Link>
                <div className="main-info">
                    <a className="imdb-link" href={`${imdbURL}${imdb_id}`} target='_blank'>
                        <ImdbIcon className='imdb-icon' color='white'></ImdbIcon>
                    </a>
                    <div className="movie-details">
                        <div className="title-wrap">
                            <h1 className="info-title">{title}</h1>
                            <h1 className="info-true-title">{original_title}</h1>
                            <p className="info-release">{release_date.replaceAll('-', '/')}</p>
                        </div>
                        <p className="info-overview">{overview}</p>
                        <div className="rate-release">
                            <p>{(Math.round(vote_average * 10) / 10).toFixed(1)} ???</p>
                            <p>{timeConvert(runtime)}</p>
                        </div>
                        <div className="genre-language">
                            <div className="info-genres">
                                <h3>Genres</h3>
                                <ul className="genres-itens">
                                    {
                                        genres.map((genre, index) => {
                                            return (
                                                <li key={index}>{genre.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="info-languages">
                                <h3>Languages spoken</h3>
                                <ul className="languages-itens">
                                    {
                                        spoken_languages.map((language, index) => {
                                            return (
                                                <li className="language" key={index}>
                                                    <p className="language-en">{language.english_name}</p>
                                                    <p className="language-true">{language.name}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section >
        )
    }
}

const Section = styled.section`
&::before {
    background: ${(props) => props.backdrop === null ? '#000' : `url(${imgURL}${props.backdrop})`};
    background-size: cover;
    }
`



export { MovieInfo }