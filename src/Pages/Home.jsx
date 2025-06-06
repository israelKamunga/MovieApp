
import MovieCard from "../Components/MovieCard";

function Home() {
    const Movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The Matrix", release_date: "1998" }
    ]

    return (
        <div className="Home">
            <div className="movies-grid">
                {Movies.map(movie => (
                    <MovieCard Movie={movie} key={movie.id} />)
                )
                }
            </div>
        </div>
    )
}

export default Home