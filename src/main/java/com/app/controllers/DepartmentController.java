package com.app.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import com.app.helpers.View;
import com.app.models.Department;
import com.app.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class DepartmentController implements BaseController<Department>{

    @Autowired
    private DepartmentService departmentService;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.departments}/{id}")
    @JsonView(View.Summary.class)
    public ResponseEntity<Department> get(@PathVariable("id") int id) {
        return new ResponseEntity<>(departmentService.findOne(id), HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.departments}")
    @JsonView(View.FullInformation.class)
    public ResponseEntity<List<Department>> list() {
        return new ResponseEntity<>(departmentService.findAll(), HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.departments}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @JsonView(View.Summary.class)
    public ResponseEntity<Department> create(@RequestBody Department item) {
        return new ResponseEntity<>(departmentService.create(item), HttpStatus.CREATED);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.departments}/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    @JsonView(View.Summary.class)
    public ResponseEntity<Department> update(@PathVariable("id") int id, @RequestBody Department item) {
        return new ResponseEntity<>(departmentService.update(id, item), HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.departments}/{id}", method = RequestMethod.DELETE)
    @JsonView(View.Summary.class)
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        departmentService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @RequestMapping(value = "${api.endpoints.departments}/empty", method = RequestMethod.GET)
    @JsonView(View.Summary.class)
    public ResponseEntity<?> listEmpty() {

        return new ResponseEntity<>(departmentService
                .findAll()
                .stream()
                .filter(x -> x.getEmployees().isEmpty())
                .collect(Collectors.toList()), HttpStatus.OK);
    }
}

