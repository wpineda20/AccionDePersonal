import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const justificationTypeApi = axios.create({
    baseURL: "/web/justificationType",
});

// justificationTypeApi.interceptors.request.use(interceptorRequest);
// justificationTypeApi.interceptors.response.reject(interceptorReponse);

export default justificationTypeApi;
