const API_KEYS = '42b69e6a40243ffcb73f4d50e62af73e'

export default {

    async getWeather(location: string) {
        const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEYS}`)
        const data = await request.json()
        return data   
    },

    setWeather(location: string) {},

    async getForecast(lon: number, lat: number) {
        const request = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEYS}`)
        const data = await request.json()
        return data   
    },

}


