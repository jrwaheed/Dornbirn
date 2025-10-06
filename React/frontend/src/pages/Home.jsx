import MovieCard from "../components/MovieCard"
import { useDeferredValue, useState } from "react"
import { useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import '../css/Home.css'


function Home() {
    const [searchQuery, setSearchQuery] = useState("The")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies();
    }, []);


    const handlesSearch = (e) => {
        e.preventDefault()
        if (!searchQuery) return;
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

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;