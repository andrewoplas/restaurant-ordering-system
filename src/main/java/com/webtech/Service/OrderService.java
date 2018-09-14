package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.OrderRepo;
import com.webtech.Model.Order;

@Service
public class OrderService implements SERVICE<Order> {
	
	@Autowired
	OrderRepo service;
	
	@Override
	public Order create(Order obj) {
		// TODO Auto-generated method stub
		return service.create(obj);
	}

	@Override
	public void update(Order obj) {
		// TODO Auto-generated method stub
		service.update(obj);
	}

	@Override
	public boolean delete(String id) {
		// TODO Auto-generated method stub
		return service.delete(id);
	}

	@Override
	public List<Order> getItems() {
		// TODO Auto-generated method stub
		return service.getItems();
	}

	@Override
	public Order getItem(String id) {
		// TODO Auto-generated method stub
		return service.getItem(id);
	}

}
