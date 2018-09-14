package com.webtech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.Order;
import com.webtech.Service.OrderService;

@RestController
public class OrderController extends BaseController implements CONTROLLER<Order> {
	
	@Autowired
	OrderService service;
	
	@CrossOrigin
    @RequestMapping(path = "/order", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Order create(Order obj) {
		// TODO Auto-generated method stub
		return service.create(obj);
	}

	@CrossOrigin
    @RequestMapping(path = "/order", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public void update(Order obj) {
		// TODO Auto-generated method stub
		service.update(obj);
	}
	
	@CrossOrigin
    @RequestMapping(path = "/order/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public boolean delete(@PathVariable(name = "id", required = true)String id) {
		// TODO Auto-generated method stub
		return service.delete(id);
	}
	
	@CrossOrigin
    @RequestMapping(path = "/orders", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Order> getItems() {
		// TODO Auto-generated method stub
		return service.getItems();
	}
	
	@CrossOrigin
    @RequestMapping(path = "/order/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Order getItem(@PathVariable(name = "id", required = true)String id) {
		// TODO Auto-generated method stub
		return service.getItem(id);
	}

}
