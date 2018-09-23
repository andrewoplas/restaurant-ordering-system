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
	private OrderDao repository;
	
	@Override
	public Order create(Order obj) {
		return repository.create(obj);
	}

	@Override
	public void update(Order obj) {
		repository.update(obj);
	}

	@Override
	public boolean delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			
			if(repository.itemExist(longId)) {
				result = repository.delete(id);
			}
		} catch (Exception ex) {
			result = false;
		}
		
		return result;
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
