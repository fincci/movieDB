import './movie-card.css'

const MovieCard = ({ movieInfo, index }) => {

    const { poster_path, title } = movieInfo
    return (
        <li className="movie-card" key={index}>
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster de ${title}`} />
        </li>
    )
}

export { MovieCard }