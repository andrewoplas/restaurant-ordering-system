package com.webtech.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.webtech.Model.User;
import java.util.*;

import com.webtech.Service.UserService;

@RestController
public class UserController extends BaseController implements CONTROLLER<TaskEntity>{
    @Autowired
	UserService userservice;
	
	@CrossOrigin
    @RequestMapping(path = "/user", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public User create(User obj) {
		// TODO Auto-generated method stub
		return userservice.create(obj);
	}

	@CrossOrigin
    @RequestMapping(path = "/userr", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public void update(User obj) {
		// TODO Auto-generated method stub
		userservice.update(obj);
	}
	
	@CrossOrigin
    @RequestMapping(path = "/user/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public boolean delete(@PathVariable(name = "id", required = true)String id) {
		// TODO Auto-generated method stub
		return userservice.delete(id);
	}
	
	@CrossOrigin
	@GetMapping(path = "/get-all-users", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<User> getItems() {
		// TODO Auto-generated method stub
		System.out.println("UserController.get-all-user.start");
        System.out.println("UserController.get-all-user.end");
        
		return userservice.getItems();
	}
	
	
	@CrossOrigin
    @RequestMapping(path = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public User getItem(@PathVariable(name = "id", required = true)String id) {
		// TODO Auto-generated method stub
		return userservice.getItem(id);
	}

}