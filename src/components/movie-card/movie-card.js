import './movie-card.css'
import poster_dafault from '../../assets/images/MTS.png'

const MovieCard = ({ movieInfo, index }) => {

    const { poster_path, title } = movieInfo

    if (poster_path === null) {
        return (
            <li className="movie-card" key={index}>
                <img className='poster' src={poster_dafault} alt={`(${title})`} />
                <h3 className='movie-title'>{title}</h3>
            </li>
        )
    } else {
        return (
            <li className="movie-card" key={index}>
                <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster de ${title}`} />
            </li>
        )
    }




}

export { MovieCard }