import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

class EmployeeService {

    createEmployee(data) {
        return http.post("/register", data)
    }

    loginEmployee(data) {
        console.log(data);
        return http.post("/login", data)
    }

    getAllEmployees() {
        return http.get("/employees")
    }

    getOneEmployee(id) {
        return http.get(`/employees/${id}`)
    }

    logoutEmployee() {
        return http.get('/logout')
    }

    deleteEmployee(id) {
        return http.delete(`/employees/${id}`)
    }

}


export default new EmployeeService();