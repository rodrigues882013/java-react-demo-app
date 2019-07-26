package com.app.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import com.app.helpers.View;
import com.app.models.Employee;
import com.app.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController implements BaseController<Employee>{

    @Autowired
    private EmployeeService employeeService;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.employees}/{id}")
    @JsonView(View.Summary.class)
    public ResponseEntity<Employee> get(@PathVariable("id") int id) {
        return new ResponseEntity<>(employeeService.findOne(id), HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.employees}")
    @JsonView(View.FullInformation.class)
    public ResponseEntity<List<Employee>> list() {
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.employees}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @JsonView(View.FullInformation.class)
    public ResponseEntity<Employee> create(@RequestBody Employee item) {
        return new ResponseEntity<>(employeeService.create(item), HttpStatus.CREATED);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.employees}/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    @JsonView(View.FullInformation.class)
    public ResponseEntity<Employee> update(@PathVariable("id") int id, @RequestBody Employee item) {
        return new ResponseEntity<>(employeeService.update(id, item), HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.employees}/{id}", method = RequestMethod.DELETE)
    @JsonView(View.Summary.class)
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        employeeService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

