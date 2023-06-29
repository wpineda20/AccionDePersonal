import axios from "axios";

const departmentApi = axios.create({
    baseURL: "/web/department",
});

export default departmentApi;
