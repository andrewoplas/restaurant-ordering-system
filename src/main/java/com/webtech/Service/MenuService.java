package com.webtech.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		if(repository.itemExist(obj.getId()) && !repository.sameName(obj.getName(), obj.getId())) {
			repository.update(obj);
		} else {
			return null;
		}
		 
		 return repository.getItems();
	}

	@Override
	public  List<Menu> delete(String id) {
		try {		
			Menu menu = repository.getItem(id);
			if(menu != null) {
				repository.delete(id);
			} else {
				return null;
			}
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
			return null;
		}		
		
		return repository.getItems();
	}

	@Override
	public List<Menu> getItems() {
		List<Menu> menus = repository.getItems();
		
		if(menus.size() > 0) {
			for(Menu menu: menus) {
				List<MenuItem> menuItems = new ArrayList<MenuItem>();
				
				for(Long menuItemId: menu.getMenu_items()) {
		    		menuItems.add(menuItemRepository.getItem(menuItemId.toString()));
		    	}
				
				menu.setItems(menuItems);
	    	}
		}
		
		return menus;
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
