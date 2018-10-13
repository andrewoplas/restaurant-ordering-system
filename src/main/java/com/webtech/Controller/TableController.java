package com.webtech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.Table;
import com.webtech.Service.TableService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TableController extends BaseController implements CONTROLLER<Table> {
	@Autowired
	TableService service;
	
	@CrossOrigin
    @RequestMapping(path = "/table", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Table> create(Table obj) {
		// TODO Auto-generated method stub
		return service.create(obj);
	}
	@CrossOrigin
    @RequestMapping(path = "/update-table", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Table> update(Table obj) {
		// TODO Auto-generated method stub
		return service.update(obj);
	}
	@CrossOrigin
    @RequestMapping(path = "/delete-table/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Table> delete(@PathVariable(name = "id", required = true) String id) {
		// TODO Auto-generated method stub
		return service.delete(id);
	}
	@CrossOrigin
    @RequestMapping(path = "/get-all-tables", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Table> getItems() {
		// TODO Auto-generated method stub
		return service.getItems();
	}
	@CrossOrigin
    @RequestMapping(path = "/table/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Table getItem(@PathVariable(name = "id", required = true) String id) {
		// TODO Auto-generated method stub
		return service.getItem(id);
	}
	
	@CrossOrigin
    @PostMapping(path = "/table/login", produces = MediaType.APPLICATION_JSON_VALUE)
	public Object login(@RequestBody String table) { 
		return service.login(table);
	}
	
	@CrossOrigin
    @PostMapping(path = "/table/logout", produces = MediaType.APPLICATION_JSON_VALUE)
	public Object logout(@RequestBody String table) { 
		System.out.println(table);
		return service.logout(table);
	}

}
