package com.webtech.Service;


import com.webtech.Dao.UserRepo;
import com.webtech.Model.User;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements SERVICE<TaskEntity>{
    @Autowired
    UserRepo userRepo;

    @Override
    public List<User> getItems(){
        return userRepo.getItems(null);
    }

    @Override
    public User getItem(String id){
        return userRepo.getItem(Long.valueOf(id));
    }
    
    @Override
    public User create(User user){
        Optional<Long> id = userRepo.addObject(user);
        id.ifPresent(i -> user.setId(i.toString()));
        return user;
    }

    @Override
    public boolean delete(String id){
        userRepo.delete(Long.valueOf(id));
        return true;
    }

    @Override
    public void update(User user){
        userRepo.update(user);
    }

}