package com.webtech.Dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Order;

@Repository
public class OrderDao implements REPOSITORY<Order> {
	
	@Override
	public Order create(Order obj) {
		Order insertedOrder = null;
		
		try {
			insertedOrder = em.insert(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
		
		return insertedOrder;
	}

	@Override
	public void update(Order obj) {
		try {
			em.update(obj);			
		} catch (Exception ex) {
			System.out.println("UPDATEDAO: " + ex.getMessage());
		}
	}

	@Override
	public boolean delete(String id) {
		try {
			em.delete(Order.class, Long.parseLong(id));
			return true;
		} catch (Exception ex) {
			System.out.println("DELETEDAO: " + ex.getMessage());
		}
		
		return false;
	}
	
	public List<Order> getItems() {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `Order`");
		QueryResponse<Order> response = em.executeEntityQueryRequest(Order.class, request);
		List<Order> obj = response.getResults();
		return obj;
	}
	
	public Order getItemByOrderNumber(String orderNumber) {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `Order` WHERE order_number=@order_num");
		request.setNamedBinding("order_num", orderNumber);
		QueryResponse<Order> response = em.executeEntityQueryRequest(Order.class, request);
		
		return response.getResults().get(0);
	}

	@Override
	public Order getItem(String id) {
		return em.load(Order.class, Long.parseLong(id));
	}

	
	public boolean itemExist(long id) {
		return getItem(Long.toString(id)) != null;
	}
	
	public boolean itemExistByOrderNumber(String orderNumber) {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `Order` WHERE order_number=@order_num");
		request.setNamedBinding("order_num", orderNumber);
		QueryResponse<Order> response = em.executeEntityQueryRequest(Order.class, request);
		
		return !response.getResults().isEmpty();
	}

	public void cancelOrder(long orderNumber) {
		
		
	}

	

}
