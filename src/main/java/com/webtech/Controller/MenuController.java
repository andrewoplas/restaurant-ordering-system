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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.Menu;
import com.webtech.Model.Order;
import com.webtech.Service.MenuService;



@RestController
public class MenuController extends BaseController implements CONTROLLER<Menu>{

    @Autowired
	MenuService service;

	@CrossOrigin
	@PostMapping(path = "/menu", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Menu create(Menu obj) {
		return service.create(obj);
	}
	
	@CrossOrigin
    @PutMapping(path = "/update-menu", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public void update(Menu obj) {
		service.update(obj);
	}
	
	@CrossOrigin
    @DeleteMapping(path = "/delete-menu/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public boolean delete(@PathVariable(name = "id", required = true) String id) {
		return service.delete(id);
	}
	
	@CrossOrigin
	@GetMapping(path = "/get-all-menu", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Menu> getItems() {
		System.out.println("GET ALL MENU");
		return service.getItems();
	}
	
	@CrossOrigin
    @GetMapping(path = "/menu/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Menu getItem(@PathVariable(name = "id", required = true)String id) {
		return service.getItem(id);
	}
}