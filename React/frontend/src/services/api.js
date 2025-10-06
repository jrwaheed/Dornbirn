const API_KEY = "5508222ddf152392d9360608dd09fbc6"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
};


