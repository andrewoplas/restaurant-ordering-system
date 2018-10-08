package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.MenuItemDao;
import com.webtech.Model.MenuItem;

@Service
public class MenuItemService implements SERVICE<MenuItem>{

	@Autowired
	MenuItemDao repository;
	
	@Override
	public List<MenuItem> create(MenuItem obj) {
		if(!repository.itemExist(obj.getName())) {
			if(repository.create(obj) == null) {
				System.out.println("ERROR");
				return null;
			}
		} else {
			System.out.println("ALREADY EXISTS");
			return null;
		}
			
		return repository.getItems();
	}

	@Override
	public List<MenuItem> update(MenuItem obj) {
		repository.update(obj);
		return repository.getItems();
	}

	@Override
	public List<MenuItem> delete(String id) {
		try {		
			MenuItem menu = repository.getItem(id);
			if(menu != null) {
				repository.delete(id);
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
	public List<MenuItem> getItems() {
		return repository.getItems();
	}

	@Override
	public MenuItem getItem(String id) {
		return repository.getItem(id);
	}

}