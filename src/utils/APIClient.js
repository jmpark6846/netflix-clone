import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3/"

const APIClient = axios.create({
    baseURL: BASE_URL,
})

APIClient.interceptors.request.use(config => ({...config, params:{api_key: process.env.REACT_APP_MOVIE_API_KEY}}))

export default APIClient