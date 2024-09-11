import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9080/employees";

class EmployeeService {
    saveEmployee(employee) {
        // Pass the employee data in the POST request// imp 
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+id);
    }
    deleteEmployeeById(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);
    }
    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+"/"+id,employee);
    }
}

export default new EmployeeService();


// import axios from 'axios'
// const EMPLOYEE_SAPI_BASE_URL="http://localhost:9080/employees"
// class EmployeeService{
//     saveEmployee(employee){
//         return axios.post(EMPLOYEE_SAPI_BASE_URL);
//     }
// }

// export default new EmployeeService();