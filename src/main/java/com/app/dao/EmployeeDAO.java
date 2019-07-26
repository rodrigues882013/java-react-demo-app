package com.app.dao;

import com.app.models.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeDAO extends CrudRepository<Employee, Integer> {
}
