package com.webtech.Service;

import java.util.List;

import com.webtech.Dao.MenuItemRepo;
import com.webtech.Model.MenuItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class MenuItemService implements SERVICE<MenuItem>{

	@Autowired
	MenuItemRepo dao;
	
	@Override
	public MenuItem create(MenuItem obj) {
		Optional<Long> id = dao.addObject(obj);
        id.ifPresent(i -> obj.setId(i));
		obj.setId(id.get());
		return obj;
	}

	@Override
	public void update(MenuItem obj) {
		dao.update(obj);
	}

	@Override
	public boolean delete(String id) {
		dao.delete(Long.valueOf(id));
        return true;
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