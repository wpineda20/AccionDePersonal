import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const remarkApi = axios.create({
    baseURL: "/web/remark",
});

// remarkApi.interceptors.request.use(interceptorRequest);
// remarkApi.interceptors.response.reject(interceptorReponse);

export default remarkApi;
