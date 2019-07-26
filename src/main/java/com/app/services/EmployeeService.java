package com.app.services;

import com.app.dao.DepartmentDAO;
import com.app.dao.EmployeeDAO;
import com.app.models.Department;
import com.app.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class EmployeeService implements IService<Employee> {


    @Autowired
    private EmployeeDAO employeeDao;

    @Autowired
    private DepartmentDAO departmentDAO;

    @Autowired
    private UserService userService;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public Employee findOne(int id) {
        return employeeDao.findOne(id);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public List<Employee> findAll() {
        return (List<Employee>) employeeDao.findAll();
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public Employee create(Employee item) {
        Department department = departmentDAO.findOne(item.getDepartment().getId());
        item.setDepartment(department);
        return employeeDao.save(item);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public Employee update(int id, Employee item) {
        Employee e = findOne(id);
        e.setUser(userService.getAuthenticatedUser());
        e.setName(item.getName());
        e.setLastName(item.getLastName());
        e.setCelPhone(item.getCelPhone());
        e.setLastUpdate(new Date());

        Department department = departmentDAO.findOne(item.getDepartment().getId());
        e.setDepartment(department);

        return employeeDao.save(e);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public void delete(int id) {
        employeeDao.delete(id);
    }
}
