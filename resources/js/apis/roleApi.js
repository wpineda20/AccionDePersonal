import axios from "axios";

const departmentApi = axios.create({
    baseURL: "/web/role",
});

export default departmentApi;
