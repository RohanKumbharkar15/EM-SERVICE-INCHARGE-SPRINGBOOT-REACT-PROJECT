package com.emloyeeProject.EmployeeManagementSys.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emloyeeProject.EmployeeManagementSys.Entity.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long>  {
    
}
