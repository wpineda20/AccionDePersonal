import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const statusApi = axios.create({
    baseURL: "/web/status",
});

// statusApi.interceptors.request.use(interceptorRequest);
// statusApi.interceptors.response.reject(interceptorReponse);

export default statusApi;
