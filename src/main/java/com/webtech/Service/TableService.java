package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.TableRepo;
import com.webtech.Model.Order;
import com.webtech.Model.OrderStatus;
import com.webtech.Model.Table;

@Service
public class TableService implements SERVICE<Table> {
	
	@Autowired
	TableRepo service;
	@Override
	public List<Table> create(Table obj) {
		// TODO Auto-generated method stub
		service.create(obj);
		return service.getItems();
	}

	@Override
	public List<Table> update(Table obj) {
		// TODO Auto-generated method stub
		
		service.update(obj);
		return service.getItems();
	}

	@Override
	public List<Table> delete(String id) {
		// TODO Auto-generated method stub
boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			Table order = service.getItem(id);
			if(order != null) {
				result = service.delete(id);
				return service.getItems();
			}else {
				return null;
			}
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
			return null;
		}
	}

	@Override
	public List<Table> getItems() {
		// TODO Auto-generated method stub
		return service.getItems();
	}

	@Override
	public Table getItem(String id) {
		// TODO Auto-generated method stub
		return service.getItem(id);
	}

}
