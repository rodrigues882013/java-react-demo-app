package com.app.dao;

import com.app.models.Department;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DepartmentDAO extends CrudRepository<Department, Integer> {
}
