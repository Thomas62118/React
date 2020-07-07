const API_KEYS = '42b69e6a40243ffcb73f4d50e62af73e'

export default {

    async hourWeather(location: string) {
        const request = await fetch(`http://api.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=${API_KEYS}`)
        const data = await request.json()
        return data   
    },
}