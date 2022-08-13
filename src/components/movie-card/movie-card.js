const MovieCard = ({ movieInfo, index }) => {
    console.log(movieInfo); //log
    return (
        <li className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} />
            <img src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} />
            <h2>{movieInfo.title}</h2>
            <p>{movieInfo.overview}</p>
            <span>{movieInfo.vote_average}</span>
            <span>{movieInfo.release_date}</span>
            <p>{movieInfo.genre_ids}</p>
            <span>{movieInfo.id}</span>
        </li>
    )
}

export { MovieCard }