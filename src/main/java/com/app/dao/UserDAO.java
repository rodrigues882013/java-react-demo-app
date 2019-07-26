package com.app.dao;

import com.app.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;



@Transactional
public interface UserDAO extends CrudRepository<User, Integer> {
    User findByUsername(@Param("username") String username);
}
