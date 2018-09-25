package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.MenuDao;
import com.webtech.Model.Menu;

@Service
public class MenuService implements SERVICE<Menu> {
	@Autowired
	private MenuDao repository;
	
	@Override
	public Menu create(Menu obj) {
		return repository.create(obj);
	}

	@Override
	public void update(Menu obj) {
		repository.update(obj);
	}

	@Override
	public boolean delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			Menu menu = repository.getItem(id);
			if(menu != null) {
				result = repository.delete(id);
			}
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
		}
		
		return result;
	}

	@Override
	public List<Menu> getItems() {
		return repository.getItems();
	}

	@Override
	public Menu getItem(String id) {		
		return repository.getItem(id);
	}
}
