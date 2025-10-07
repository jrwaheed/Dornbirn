const API_KEY = "5508222ddf152392d9360608dd09fbc6"
const BASE_URL = "https://api.themoviedb.org/3"
const EXCHANGE_API_KEY = "uYymBFLYdj1C8SARGCUeSpp6iqtRClc6"

import { restClient } from '@polygon.io/client-js'
const rest = restClient(EXCHANGE_API_KEY, 'https://api.polygon.io');

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



export const getPolyForexQuotes = async (baseCurrency, quoteCurrency) => {

    const { restClient } = require("@polygon.io/client-js")
    const rest = restClient(EXCHANGE_API_KEY)
    debugger
    rest.stocks
        .aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01")
        .then((data) => {
            console.log(data)
        })
        .catch((e) => {
            console.error("An error happened:", e)
        })
}