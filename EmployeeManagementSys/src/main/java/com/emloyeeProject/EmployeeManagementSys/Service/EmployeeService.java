package com.emloyeeProject.EmployeeManagementSys.Service;

import java.util.List;

import com.emloyeeProject.EmployeeManagementSys.model.Employee;

public interface EmployeeService {

        String createEmployee(Employee employee);
        List<Employee> displayAllEmployees();

        boolean deleteEmployee(Long id);

       String updateEmployee(Long id ,Employee employee);

        Employee searchEmployee(Long id);

}
