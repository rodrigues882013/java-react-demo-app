package com.app.controllers;

import com.app.controllers.BaseController;
import com.fasterxml.jackson.annotation.JsonView;
import com.app.dao.UserDAO;
import com.app.helpers.View;
import com.app.models.User;
import com.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
public class UserController implements BaseController<User> {


    @Autowired
    private UserService userService;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.users}/{id}")
    public ResponseEntity<User> get(@PathVariable("id") int id) {
        User user = userService.findOne(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.users}")
    @JsonView(View.FullInformation.class)
    public ResponseEntity<List<User>> list() {
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.users}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> create(@RequestBody User user) {
        User u = userService.create(user);
        return new ResponseEntity<>(u, u == null ? HttpStatus.CONFLICT : HttpStatus.CREATED);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.users}/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> update(@PathVariable("id") int id, @RequestBody User user) {
        User uSaved = userService.update(id, user);
        return new ResponseEntity<>(uSaved, uSaved == null ? HttpStatus.CONFLICT : HttpStatus.OK);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    @RequestMapping(value = "${api.endpoints.users}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        userService.delete(id);
        return new ResponseEntity<>(HttpStatus.GONE);
    }
}
