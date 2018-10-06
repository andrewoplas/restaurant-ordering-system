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
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.Order;
import com.webtech.Service.OrderService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class OrderController extends BaseController implements CONTROLLER<Order> {
	
	@Autowired
	OrderService service;
	
	@CrossOrigin
    @PostMapping(path = "/order", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Order> create(Order obj) {
		return service.create(obj);
	}
	
	@CrossOrigin
    @PutMapping(path = "/update-order", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Order> update(Order obj) {
		return service.update(obj);
	}
	
	@CrossOrigin
    @DeleteMapping(path = "/delete-order/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Order> delete(@PathVariable(name = "id", required = true) String id) {
		return service.delete(id);
	}
	
	@CrossOrigin
	@GetMapping(path = "/get-all-orders", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Order> getItems() {
		return service.getItems();
	}
	
	@CrossOrigin
    @GetMapping(path = "/order/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Order getItem(@PathVariable(name = "id", required = true)String id) {
		return service.getItem(id);
	}

}
