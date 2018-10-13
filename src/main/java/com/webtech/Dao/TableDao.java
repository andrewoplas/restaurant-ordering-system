package com.webtech.Dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Menu;
import com.webtech.Model.Table;

@Repository
public class TableDao implements REPOSITORY<Table> {

	@Override
	public Table create(Table obj) {
		return em.insert(obj);	
	}

	@Override
	public void update(Table obj) {
		em.update(obj);
	}

	@Override
	public boolean delete(String id) {
		em.delete(Menu.class, id);
		return true;
	}

	@Override
	public List<Table> getItems() {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM Table");
		QueryResponse<Table> response = em.executeEntityQueryRequest(Table.class, request);
		List<Table> obj = response.getResults();
		return obj;
	}

	@Override
	public Table getItem(String id) {
		return em.load(Table.class, Long.parseLong(id));
	}
	
	public Table getItemByTableNumber(String tableNumber) {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `Table` WHERE table_number=@tableNumber");
		request.setNamedBinding("tableNumber", Long.parseLong(tableNumber));
		QueryResponse<Table> response = em.executeEntityQueryRequest(Table.class, request);
		Table table = response.getResults().size() > 0? response.getResults().get(0) : null;
		
		return table;
	}
}
