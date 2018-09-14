package com.webtech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.Menu;
import com.webtech.Service.MenuService;



@RestController
public class MenuController extends BaseController implements CONTROLLER<Menu>{

    @Autowired
	MenuService taskservice;

	@CrossOrigin
    @RequestMapping(path = "/menu", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	
	public @ResponseBody Menu create(Menu obj) {
		// TODO Auto-generated method stub
		return taskservice.create(obj);
	}
	@CrossOrigin
    @RequestMapping(path = "/menu", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	
	public void update(Menu obj) {
		// TODO Auto-generated method stub
		taskservice.update(obj);
	}

	@CrossOrigin
    @RequestMapping(path = "/menu/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    
	public boolean delete(@PathVariable(name = "id", required = true) String id) {
		// TODO Auto-generated method stub
		return taskservice.delete(id);
	}

	@CrossOrigin
    @RequestMapping(path = "/menus", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    
	public List<Menu> getItems() {
		// TODO Auto-generated method stub
		return taskservice.getItems();
	}

	@CrossOrigin
    @RequestMapping(path = "/menu/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Override
	public Menu getItem(@PathVariable(name = "id", required = true) String id) {
		// TODO Auto-generated method stub
		return taskservice.getItem(id);
	}
	
}