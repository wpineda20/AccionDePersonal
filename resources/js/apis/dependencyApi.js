import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const dependencyApi = axios.create({
    baseURL: "/api/web/dependency",
});

// dependencyApi.interceptors.request.use(interceptorRequest);
// dependencyApi.interceptors.response.reject(interceptorReponse);

export default dependencyApi;
