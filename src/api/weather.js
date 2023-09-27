import axios from "axios";

export const getAxiosWeather = async (city, API_key) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);

        return response;
    } catch (error) {
        console.log("Ocurrio algún error, intentelo más tarde");
        return error;
    }
};