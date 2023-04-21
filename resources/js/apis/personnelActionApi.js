import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const personnelActionApi = axios.create({
    baseURL: "/api/web/personnelAction",
});

// personnelActionApi.interceptors.request.use(interceptorRequest);
// personnelActionApi.interceptors.response.reject(interceptorReponse);

export default personnelActionApi;
