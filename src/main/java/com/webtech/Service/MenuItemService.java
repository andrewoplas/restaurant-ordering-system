package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.MenuItemDao;
import com.webtech.Dao.OrderDao;
import com.webtech.Model.Menu;
import com.webtech.Model.MenuItem;
import com.webtech.Model.MenuItemQuantity;
import com.webtech.Model.Order;

@Service
public class MenuItemService implements SERVICE<MenuItem>{

	@Autowired
	MenuItemDao repository;
	
	@Autowired
	MenuService menuService;
	
	@Autowired 
	OrderDao orderRepository;
	
	@Override
	public List<MenuItem> create(MenuItem obj) {
		if(!repository.itemExist(obj.getName())) {
			// Menu Item does not exists
			MenuItem response = repository.create(obj);			
			if(response != null) {
				// Add Menu Item to a Menu's menu item list
				Menu menu = menuService.getItem(obj.getMenuId().toString());
				menu.addMenu_items(response.getId());
				menuService.update(menu);
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
		MenuItem menuItem = repository.getItem(id);
		if(repository.itemExist(Long.parseLong(id))) {
			List<Order> orders = orderRepository.getItems();
			long menuItemId = Long.parseLong(id);
			boolean valid = true;
			
			for(Order order: orders) {
				for(MenuItemQuantity miq: order.getMenuItem()) {
					if(miq.getId() == menuItemId) {
						valid = false;
						break;
					}
				}
				
				if(!valid) break;
			}
			
			if(valid) {
				repository.delete(id);
				
				// Remove Menu Item to a Menu's menu item list
				Menu menu = menuService.getItem(menuItem.getMenuId().toString());
				menu.removeMenu_items(menuItem.getId());
				menuService.update(menu);
			} else {
				return null;
			}
		} else {
			// Menu Item does not exists
			return null;
		}
		
		return repository.getItems();
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