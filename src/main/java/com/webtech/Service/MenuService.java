package com.webtech.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Dao.MenuDao;
import com.webtech.Dao.MenuItemDao;
import com.webtech.Model.Menu;
import com.webtech.Model.MenuItem;

@Service
public class MenuService implements SERVICE<Menu> {
	@Autowired
	private MenuDao repository;
	
	@Autowired
	private MenuItemDao menuItemRepository;
	
	@Override
	public  List<Menu> create(Menu obj) {
		if(repository.itemExist(obj.getName())) {
			return null;
		} else {
			repository.create(obj);
		}
		
		return repository.getItems();
	}

	@Override
	public List<Menu> update(Menu obj) {
		System.out.println(repository.itemExist(obj.getId()));
		System.out.println(repository.sameName(obj.getName(), obj.getId()));
		if(repository.itemExist(obj.getId()) && !repository.sameName(obj.getName(), obj.getId())) {
			repository.update(obj);
		} else {
			return null;
		}
		 
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
		if(returnedMenu != null) {
			List<MenuItem> menuItems = new ArrayList<MenuItem>();
			
	    	for(Long menuItemId: returnedMenu.getMenu_items()) {
	    		menuItems.add(menuItemRepository.getItem(menuItemId.toString()));
	    	}
	    	
	    	returnedMenu.setItems(menuItems);
		}
		
		return returnedMenu;
	}
}
