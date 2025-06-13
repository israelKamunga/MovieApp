
import MovieCard from "../Components/MovieCard";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const Movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The Matrix", release_date: "1998" }
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert("Hello everyone");
        setSearchQuery("--------");
    }

    return (
        <div className="Home">
            <form action="" onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {Movies.map(movie => movie.title.toLocaleLowerCase().startsWith(searchQuery.toLowerCase()) && (
                    <MovieCard Movie={movie} key={movie.id} />)
                )
                }
            </div>
        </div>
    )
}

export default Home