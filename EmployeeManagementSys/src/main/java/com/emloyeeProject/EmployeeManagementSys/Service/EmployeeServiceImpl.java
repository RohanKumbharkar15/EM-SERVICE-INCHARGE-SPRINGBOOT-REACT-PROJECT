package com.emloyeeProject.EmployeeManagementSys.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emloyeeProject.EmployeeManagementSys.Entity.EmployeeEntity;
import com.emloyeeProject.EmployeeManagementSys.Repository.EmployeeRepository;
import com.emloyeeProject.EmployeeManagementSys.model.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    @Override
    public List<Employee> displayAllEmployees() {
            
        List<EmployeeEntity> employeeEntities= employeeRepository.findAll();
        List<Employee> employees=new ArrayList<>();
        for(EmployeeEntity employeeEntity:employeeEntities)
        {
            Employee emp=new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setPhone(employeeEntity.getPhone());
            emp.setEmail(employeeEntity.getEmail());
            employees.add(emp);
        }
        return employees;
    }
    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity=new EmployeeEntity();
        employeeEntity.setId(employee.getId());
        employeeEntity.setName(employee.getName());
        employeeEntity.setPhone(employee.getPhone());
        employeeEntity.setEmail(employee.getEmail());
        employeeRepository.save(employeeEntity);
        return "Saved Successfully";
    }
    @Override
    public boolean deleteEmployee(Long id) {
       EmployeeEntity employeeEntity= employeeRepository.findById(id).get();
       employeeRepository.delete(employeeEntity);
        return true;
    }
    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity=employeeRepository.findById(id).get();
        // employeeEntity.setId(employee.getId());
        employeeEntity.setEmail(employee.getEmail());
        employeeEntity.setName(employee.getName());
        employeeEntity.setPhone(employee.getPhone());
        employeeRepository.save(employeeEntity);
        return "updated successfully";
    }
    @Override
    public Employee searchEmployee(Long id) {

        EmployeeEntity employeeEntity=employeeRepository.findById(id).get();
        Employee emp=new Employee();
        BeanUtils.copyProperties(employeeEntity, emp);

        return emp;
        

    }
    
}
