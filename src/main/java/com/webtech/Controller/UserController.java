package com.webtech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.LoginUser;
import com.webtech.Model.User;
import com.webtech.Service.UserService;

@RestController
@RequestMapping("/")
public class UserController extends BaseController implements CONTROLLER<User> {
	
	@Autowired
	UserService service;
	
	@CrossOrigin
    @PostMapping(path = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
	public User login(@RequestBody LoginUser obj) {
		return service.login(obj);
	}
	
	@CrossOrigin
    @PostMapping(path = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<User> create(User obj) {
		return service.create(obj);
	}
	
	@CrossOrigin
    @PutMapping(path = "/update-user", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<User> update(User obj) {
		return service.update(obj);
	}
	
	@CrossOrigin
    @DeleteMapping(path = "/delete-user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<User> delete(@PathVariable(name = "id", required = true) String id) {
		return service.delete(id);
	}
	
	@CrossOrigin
	@GetMapping(path = "/get-all-users", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<User> getItems() {
		return service.getItems();
	}
	
	@CrossOrigin
    @GetMapping(path = "/user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public User getItem(@PathVariable(name="id", required = true)String id) {
		return service.getItem(id);
	}

}
