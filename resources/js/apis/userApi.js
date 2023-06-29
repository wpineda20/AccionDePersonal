import axios from "axios";

const culturaHouseApi = axios.create({
    baseURL: "/web/user",
});

export default culturaHouseApi;
