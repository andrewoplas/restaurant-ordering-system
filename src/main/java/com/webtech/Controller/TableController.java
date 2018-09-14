package com.webtech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.Table;
import com.webtech.Service.TableService;


@RestController
public class TableController extends BaseController implements CONTROLLER<Table> {
	@Autowired
	TableService service;
	
	@CrossOrigin
    @RequestMapping(path = "/table", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Table create(Table obj) {
		// TODO Auto-generated method stub
		return service.create(obj);
	}
	@CrossOrigin
    @RequestMapping(path = "/table", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public void update(Table obj) {
		// TODO Auto-generated method stub
		service.update(obj);
	}
	@CrossOrigin
    @RequestMapping(path = "/table/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public boolean delete(@PathVariable(name = "id", required = true) String id) {
		// TODO Auto-generated method stub
		return service.delete(id);
	}
	@CrossOrigin
    @RequestMapping(path = "/tables", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
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

}
