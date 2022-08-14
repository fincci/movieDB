import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchDetails } from "../../scripts/services/fetchs"
import { imgURL } from '../../scripts/variables'
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

    if (Object.keys(movieInfo) !== 0) {
        console.log(movieInfo); //log
        const { backdrop_path, original_title, release_date, genres, overview, runtime } = movieInfo

        return (
            <div className="movie-info">
                <div className="backdrop-wrap">
                    <img className="backdrop" src={`${imgURL}${backdrop_path}`} />
                </div>
                <div className="movie-details">
                    <h1 className="info-title">{original_title}</h1>
                    <p>{timeConvert(runtime)}</p>
                    <p className="info-overview">{overview}</p>
                    <p className="info-release">{release_date.replaceAll('-', '/')}</p>
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
            </div>
        )
    }
}

export { MovieInfo }