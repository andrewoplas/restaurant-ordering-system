package com.webtech.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Menu;
import com.webtech.Model.Order;
import com.webtech.Model.Table;

@Repository
public class OrderRepo implements REPOSITORY<Order> {

	@Override
	public Order create(Order obj) {
		// TODO Auto-generated method stub
		return em.insert(obj);
	}

	@Override
	public void update(Order obj) {
		// TODO Auto-generated method stub
		em.update(obj);
	}

	@Override
	public boolean delete(String id) {
		// TODO Auto-generated method stub
		em.delete(Menu.class, id);
		return true;
	}

	@Override
	public List<Order> getItems() {
		// TODO Auto-generated method stub
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM Order");
		QueryResponse<Order> response = em.executeEntityQueryRequest(Order.class, request);
		List<Order> obj = response.getResults();
		return obj;
	}

	@Override
	public Order getItem(String id) {
		// TODO Auto-generated method stub
		return em.load(Order.class, id);
	}

	@Override
	public Order entityToObject(Entity entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean itemExist(long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Optional<Long> addObject(Order obj) {
		// TODO Auto-generated method stub
		obj = em.insert(obj);
        return Optional.of(Long.parseLong(obj.getId()));
	}

}
