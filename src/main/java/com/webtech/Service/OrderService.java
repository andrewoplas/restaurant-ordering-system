package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.OrderDao;
import com.webtech.Model.Order;
import com.webtech.Model.OrderStatus;

@Service
public class OrderService implements SERVICE<Order> {		
	@Autowired
	private OrderDao repository;
	
	@Override
	public List<Order> create(Order obj) {
		repository.create(obj);
		return repository.getItems();
	}

	@Override
	public List<Order> update(Order obj) {
		repository.update(obj);
		return repository.getItems();
	}

	@Override
	public List<Order> delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			Order order = repository.getItem(id);
			if(order != null && order.getStatus().equals(OrderStatus.CANCELLED.toString())) {
				result = repository.delete(id);
				return repository.getItems();
			}else {
				return null;
			}
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
			return null;
		}
		
		
	}

	@Override
	public List<Order> getItems() {
		return repository.getItems();
	}

	@Override
	public Order getItem(String id) {		
		return repository.getItem(id);
	}

}
