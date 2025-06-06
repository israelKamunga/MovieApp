function MovieCard({ Movie }) {

    function onFavrotieClick() {
        console.log(`you liked ${Movie.title}`);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={Movie.url} alt={Movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavrotieClick}>❤️</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{Movie.title}</h3>
                <p>{Movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;