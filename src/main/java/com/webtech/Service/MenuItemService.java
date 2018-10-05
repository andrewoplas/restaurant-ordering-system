package com.webtech.Service;

import java.util.List;

import com.webtech.Dao.MenuItemRepo;
import com.webtech.Model.Menu;
import com.webtech.Model.MenuItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class MenuItemService implements SERVICE<MenuItem>{

	@Autowired
	MenuItemRepo dao;
	
	@Override
	public List<MenuItem> create(MenuItem obj) {
		 dao.create(obj);
		return dao.getItems();
	}

	@Override
	public List<MenuItem> update(MenuItem obj) {
		dao.update(obj);
		return dao.getItems();
	}

	@Override
	public List<MenuItem> delete(String id) {
		try {		
			Long longId = Long.parseLong(id);
			MenuItem menu = dao.getItem(id);
			if(menu != null) {
				dao.delete(id);
				return dao.getItems();
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
		return dao.getItems();
	}

	@Override
	public MenuItem getItem(String id) {
		return dao.getItem(id);
	}

}