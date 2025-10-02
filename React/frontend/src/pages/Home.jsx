import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "John Wick", release_date: "2014", url: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_.jpg" },
        { id: 2, title: "Inception", release_date: "2010", url: "https://m.media-amazon.com/images/I/51s+8Jm9HFL._AC_.jpg" },
        { id: 3, title: "Interstellar", release_date: "2014", url: "https://m.media-amazon.com/images/I/71n58vQeTgL._AC_SL1178_.jpg" },
        { id: 4, title: "The Dark Knight", release_date: "2008", url: "https://m.media-amazon.com/images/I/51EbJjlD6-L._AC_.jpg" },
        { id: 5, title: "Pulp Fiction", release_date: "1994", url: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1188_.jpg" },
    ]

    const handlesSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("------")
    }

    return (
        <div className='home'>
            <form onSubmit={handlesSearch} className="search_form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                        movie.title.toLowerCase().startsWith(searchQuery) && (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
            </div>
        </div>
    );
}

export default Home;