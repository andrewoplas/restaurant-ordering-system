package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.MenuItemRepo;
import com.webtech.Dao.MenuRepo;
import com.webtech.Model.Menu;

@Service
public class MenuService implements SERVICE<Menu> {
	
	
	@Autowired 
	MenuRepo menuRepo;
	@Autowired
	MenuItemRepo service;
	
	@Override
	public Menu create(Menu obj) {
		// TODO Auto-generated method stub
		return menuRepo.create(obj);
	}

	@Override
	public void update(Menu obj) {
		// TODO Auto-generated method stub
		menuRepo.update(obj);
	}

	@Override
	public boolean delete(String id) {
		// TODO Auto-generated method stub
		menuRepo.delete(id);
		return true;
	}

	@Override
	public List<Menu> getItems() {
		// TODO Auto-generated method stub
		List<Menu> menu =menuRepo.getItems();
		
		for(Menu here : menu) {
			here.setItems(service.getItemsFromMenu(here.getId()));
		}
		return menu;
	}

	@Override
	public Menu getItem(String id) {
		// TODO Auto-generated method stub
		Menu menu = menuRepo.getItem(id);
		menu.setItems(service.getItemsFromMenu(menu.getId()));
		return menu;
	}

}
