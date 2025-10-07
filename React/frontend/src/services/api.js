

import { restClient } from '@polygon.io/client-js'


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




export async function getPolyExhangeRate() {

    const rest = restClient(EXCHANGE_API_KEY, 'https://api.polygon.io');

    try {
        console.log
        const response = await rest.getMarketStatus();
        console.log('Response:', response);
    } catch (e) {
        console.log('An error happened:', e);
        console.error('Error message:', e.message);
    }
}