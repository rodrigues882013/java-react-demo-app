package com.app.services;

import com.app.dao.UserDAO;
import com.app.models.User;
//import com.app.security.JwtUser;
import com.app.security.JwtUser;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IService<User>{

    private final String FAKE_PASSWORD = "fake_password";

    @Autowired
    private UserDAO userDao;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public UserService(){

    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    public String generatePasswordHash(String password){
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public User findOne(int id) {
        User user = userDao.findOne(id);
        user.setPassword(FAKE_PASSWORD);
        return user;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public List<User> findAll() {
        return (List<User>) userDao.findAll();
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public User create(User item) {
        User u = null;

        if (!isExist(item.getUsername())) {
            String original = item.getPassword();
            String hash = generatePasswordHash(item.getPassword());
            item.setPassword(hash);
            item.setActive(true);
            u = userDao.save(item);
            u.setPassword(original);
        }
        return u;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public User update(int id, User item) {

        String original = item.getPassword();
        String hash = generatePasswordHash(item.getPassword());
        User u = findOne(id);
        User uSave = null;

        if (!isExist(item.getUsername())) {

            u.setFirstName(item.getFirstName());
            u.setLastName(item.getLastName());
            u.setEmail(item.getEmail());
            u.setActive(item.getActive());
            u.setUsername(item.getUsername());
            u.setPassword(hash);

            uSave = userDao.save(u);
            uSave.setPassword(original);
        }

        return uSave;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public void delete(int id) {
        userDao.delete(id);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    private boolean isExist(String userName){
        return userDao.findByUsername(userName) != null;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public User getAuthenticatedUser(){
        JwtUser u = (JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return u.getUser();
    }
}
