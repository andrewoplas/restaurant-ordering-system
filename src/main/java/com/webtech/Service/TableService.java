package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Errors;
import com.webtech.Dao.TableDao;
import com.webtech.Model.ErrorResponseModel;
import com.webtech.Model.Table;

@Service
public class TableService implements SERVICE<Table> {
	
	@Autowired
	TableDao service;
	@Override
	public List<Table> create(Table obj) {
		service.create(obj);
		return service.getItems();
	}

	@Override
	public List<Table> update(Table obj) {
		service.update(obj);
		return service.getItems();
	}

	@Override
	public List<Table> delete(String id) {		
		try {		
			Table order = service.getItem(id);
			if(order != null) {
				service.delete(id);
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
		return service.getItems();
	}

	@Override
	public Table getItem(String id) {
		return service.getItem(id);
	}

	public Object login(String id) {
		Table table = service.getItemByTableNumber(id);
		if(table != null) {
			if(table.getStatus().equals("unavailable")) {
				return new ErrorResponseModel(Errors.TABLE_OCCUPIED);
			} else {
				table.setStatus("unavailable");
				service.update(table);
			}
		} else {
			return new ErrorResponseModel(Errors.TABLE_DOES_NOT_EXISTS);
		}
		
		return table;
	}
	
	public Object logout(String id) {
		Table table = service.getItemByTableNumber(id);
		if(table != null) {
			if(table.getStatus().equals("unavailable")) {
				table.setStatus("available");
				service.update(table);
			}
		} else {
			return new ErrorResponseModel(Errors.TABLE_DOES_NOT_EXISTS);
		}
		
		return table;
	}
}
