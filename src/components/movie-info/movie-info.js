import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchDetails } from "../../scripts/services/fetchs"
import { imgURL } from '../../scripts/variables'
import arrow from '../../assets/images/arrow.png'
import styled, { css } from 'styled-components'
import './movie-info.css'

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

    const { backdrop_path, original_title, release_date, genres, overview, runtime, vote_average, spoken_languages } = movieInfo

    if (Object.keys(movieInfo).length !== 0) {
        return (
            <Section backdrop={backdrop_path} className="movie-info">
                <Link className="link-back" to='/'>
                    <img className="arrow" src={arrow} alt='Back'></img>
                </Link>
                <div className="main-info">
                    <div className="backdrop-wrap">
                        <img className="backdrop" src={`${imgURL}${backdrop_path}`} />
                    </div>
                    <div className="main-text">
                        <h1 className="info-title">{original_title}</h1>
                        <p className="info-overview">{overview}</p>
                    </div>

                </div>
                <div className="movie-details">
                    <p>{timeConvert(runtime)}</p>
                    <p className="info-release">{release_date.replaceAll('-', '/')}</p>
                    <p>{Math.round(vote_average * 10) / 10}</p>
                    <p>classificação indicativa</p>
                    <ul className="info-languages">
                        {
                            spoken_languages.map((language, index) => {
                                return (
                                    <li className="languages" key={index}>
                                        <p className="language-en">{language.english_name}</p>
                                        <p className="language-true">{language.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="info-genres">
                        {
                            genres.map((genre, index) => {
                                return (
                                    <li key={index}>{genre.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Section>
        )
    }
}

const Section = styled.section`
&::before {
    ${props => props.backdrop && css`
        background: url(${imgURL}${props.backdrop}) center center no-repeat;
        background-size: cover;
    `}
}
`

export { MovieInfo }