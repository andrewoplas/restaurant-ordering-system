package com.webtech.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityManager;
import com.jmethods.catatumbo.EntityManagerFactory;
import com.webtech.Dao.OrderDao;
import com.webtech.Model.Order;

@Service
public class OrderService implements SERVICE<Order> {		
	@Autowired
	private OrderDao service;
	
	@Override
	public Order create(Order obj) {
		return service.create(obj);
	}

	@Override
	public void update(Order obj) {
		service.update(obj);
	}

	@Override
	public boolean delete(String id) {
		if(getItem(id) != null) {
			service.delete(id);
			return true;
		} 
		
		return false;
	}

	@Override
	public List<Order> getItems() {
		return service.getItems();
	}

	@Override
	public Order getItem(String id) {		
		return service.getItem(id);
	}

}
