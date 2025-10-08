import { fetchWeatherApi } from 'openmeteo';





export const getWeatherData = async () => {
    const params = {
        "latitude": 47.45,
        "longitude": 9.83,
        "time": "2023-10-01/2023-10-02",
    };

    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];
    // Process first location. Add a for-loop for multiple locations or weather models

    // Attributes for timezone and location
    const latitude = response.latitude();
    const longitude = response.longitude();
    const elevation = response.elevation();
    const something = response.hourly()
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const tempUnit = response.hourly.temperature_2m;
    const temperature = response.temperature_2m;


    console.log("Weather API response:", response);
    return response;


}


export const getOtherWeatherData = async () => {
    const params = {
        "latitude": 52.520018,
        "longitude": 13.41,
        "hourly": "temperature_2m",
        "models": "icon_seamless",
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const latitude = response.latitude();
    const longitude = response.longitude();
    const elevation = response.elevation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
    );

    const hourly = response.hourly();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        hourly: {
            time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
            ),
            temperature_2m: hourly.variables(0).valuesArray(),
        },
    };

    // 'weatherData' now contains a simple structure with arrays with datetime and weather data
    console.log("\nHourly data", weatherData.hourly)
}

// const response = responses[0];
// // Process first location. Add a for-loop for multiple locations or weather models

// // Attributes for timezone and location
// const latitude = response.latitude();
// const longitude = response.longitude();
// const elevation = response.elevation();
// const utcOffsetSeconds = response.utcOffsetSeconds();
// const tempUnit = response.hourly.temperature_2m;
// const temperature = response.temperature_2m;


// console.log("Weather API response:", response);
// return response;



export default getWeatherData; getOtherWeatherData;
// export { getWeatherData, getOtherWeatherData };










// console.log(
//     `\nCoordinates: ${latitude}°N ${longitude}°E`,
//     `\nElevation: ${elevation}m asl`,
//     `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
// );

// const hourly = response.hourly();

// // Note: The order of weather variables in the URL query and the indices below need to match!
// const weatherData = {
//     hourly: {
//         time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
//             (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
//         ),
//         temperature_2m: hourly.variables(0).valuesArray(),
//     },
// };

// // 'weatherData' now contains a simple structure with arrays with datetime and weather data
// console.log("\nHourly data", weatherData.hourly)
