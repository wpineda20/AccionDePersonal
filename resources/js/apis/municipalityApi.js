import axios from "axios";

const municipalityApi = axios.create({
    baseURL: "/web/municipality",
});

export default municipalityApi;
