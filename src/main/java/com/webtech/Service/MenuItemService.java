package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.MenuItemDao;
import com.webtech.Model.Menu;
import com.webtech.Model.MenuItem;

@Service
public class MenuItemService implements SERVICE<MenuItem>{

	@Autowired
	MenuItemDao repository;
	
	@Autowired
	MenuService menuService;
	
	@Override
	public List<MenuItem> create(MenuItem obj) {
		if(!repository.itemExist(obj.getName())) {
			// Menu Item does not exists
			MenuItem response = repository.create(obj);			
			if(response != null) {
				// Add Menu Item to a Menu's menu item list
				Menu menu = menuService.getItem(obj.getMenuId().toString());
				menu.addMenu_items(response.getId());
			} else {
				return null;
			}
		} else {
			// Menu Item already exists
			return null;
		}
		
		return repository.getItems();
	}

	@Override
	public List<MenuItem> update(MenuItem obj) {
		//TODO: Check if menu item was not referenced in any order
		//TODO: If not referenced, check if it exists
		//TODO: If exists, get menu where it belongs and remove it in the list of menu_items
		//TODO: Remove item
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