package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.MenuDao;
import com.webtech.Dao.MenuItemRepo;
import com.webtech.Model.Menu;

@Service
public class MenuService implements SERVICE<Menu> {
	@Autowired
	private MenuDao repository;
	
	@Autowired
	private MenuItemRepo repo;
	
	@Override
	public  List<Menu> create(Menu obj) {
		repository.create(obj);
		return repository.getItems();
	}

	@Override
	public  List<Menu> update(Menu obj) {
		 repository.update(obj);
		 return repository.getItems();
	}

	@Override
	public  List<Menu> delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			Menu menu = repository.getItem(id);
			if(menu != null) {
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
	public List<Menu> getItems() {
		return repository.getItems();
	}

	@Override
	public Menu getItem(String id) {
		Menu returnedMenu = repository.getItem(id);
		returnedMenu.setItems(repo.getItemsFromMenu(id));
		
		return returnedMenu;
	}
}
