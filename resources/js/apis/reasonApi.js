import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const reasonApi = axios.create({
    baseURL: "/api/web/reason",
});

// reasonApi.interceptors.request.use(interceptorRequest);
// reasonApi.interceptors.response.reject(interceptorReponse);

export default reasonApi;
