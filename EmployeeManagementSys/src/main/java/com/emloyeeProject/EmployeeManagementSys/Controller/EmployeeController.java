package com.emloyeeProject.EmployeeManagementSys.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.emloyeeProject.EmployeeManagementSys.Service.EmployeeService;

import com.emloyeeProject.EmployeeManagementSys.model.Employee;

// import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestParam;






@RestController
// imp for react
// @CrossOrigin(origins = "http://localhost:5174/")
@CrossOrigin("http://localhost:5173/")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    // @RequestMapping("path")
    // public String requestMethodName() {
    //     return "<h1>This is Employee Application</h1>";
    // }

    List<Employee> employees=new ArrayList<>();
    // create employee
//     @PostMapping("employees")
//         public String postEmployee(@RequestBody Employee employee) {
//         // The employeeService creates the employee and returns a response
//         return employeeService.createEmployee(employee);
// }

    @PostMapping("employees")
    public String postEmployee(@RequestBody Employee employee) {
        
        return employeeService.createEmployee(employee);
    }
    
    // display employee
    
    @GetMapping("employees")
    public List<Employee> getAllEmployees() {


        return employeeService.displayAllEmployees();
    }

    // delete employee
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id)
    {

        if(employeeService.deleteEmployee(id))
        {
            return "Deleted Successfully";
        }
        return "Not Found";
    }

    // update employee
    @PutMapping("employees/{id}")
    public String putEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        
        return employeeService.updateEmployee(id, employee);
    }
    // search employeee
    @GetMapping("employees/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeService.searchEmployee(id);
    }
    
    
}
