package com.app.services;

import com.app.dao.DepartmentDAO;
import com.app.models.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService implements IService<Department> {

    @Autowired
    private UserService userService;

    @Autowired
    private DepartmentDAO departmentDao;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    @Override
    public Department findOne(int id) {
        return departmentDao.findOne(id);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public List<Department> findAll() {
        return (List<Department>) departmentDao.findAll();
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public Department create(Department item) {
        item.setUser(userService.getAuthenticatedUser());
        return departmentDao.save(item);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public Department update(int id, Department item) {
        Department d = findOne(id);
        d.setUser(userService.getAuthenticatedUser());
        d.setName(item.getName());
        d.setCode(item.getCode());
        d.setEmployees(item.getEmployees());

        return departmentDao.save(d);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public void delete(int id) {
        departmentDao.delete(id);
    }
}
