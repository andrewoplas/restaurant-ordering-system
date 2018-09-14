package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.TableRepo;
import com.webtech.Model.Table;

@Service
public class TableService implements SERVICE<Table> {
	
	@Autowired
	TableRepo service;
	@Override
	public Table create(Table obj) {
		// TODO Auto-generated method stub
		return service.create(obj);
	}

	@Override
	public void update(Table obj) {
		// TODO Auto-generated method stub
		service.update(obj);
	}

	@Override
	public boolean delete(String id) {
		// TODO Auto-generated method stub
		return service.delete(id);
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
