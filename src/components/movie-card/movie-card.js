import './movie-card.css'

const MovieCard = ({ movieInfo, index }) => {
    return (
        <li className="movie-card" key={index}>
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={`Poster de ${movieInfo.title}`} />
        </li>
    )
}

export { MovieCard }