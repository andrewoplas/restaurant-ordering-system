package com.webtech.Dao;

import com.google.appengine.api.datastore.*;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Menu;
import com.webtech.Model.MenuItem;
import com.webtech.Model.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Repository
public class MenuItemRepo implements REPOSITORY<MenuItem>{


	@Override
	public MenuItem create(MenuItem obj) {
		MenuItem insertedMenu = null;
		
		try {
			insertedMenu = em.insert(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTMENU: " + ex.getMessage());
		}
		
		return insertedMenu;
	}

	@Override
	public void update(MenuItem obj) {
		try {
			em.update(obj);			
		} catch (Exception ex) {
			System.out.println("UPDATEMENU: " + ex.getMessage());
		}
	}

	@Override
	public boolean delete(String id) {
		try {
			em.delete(MenuItem.class, Long.parseLong(id));
			return true;
		} catch (Exception ex) {
			System.out.println("DELETEMENU: " + ex.getMessage());
		}
		
		return false;
	}
	
	public List<MenuItem> getItems() {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `MenuItem`");
		QueryResponse<MenuItem> response = em.executeEntityQueryRequest(MenuItem.class, request);
		List<MenuItem> obj = response.getResults();
		return obj;
	}

	@Override
	public MenuItem getItem(String id) {
		return em.load(MenuItem.class, Long.parseLong(id));
	}


	public boolean itemExist(long id) {
		return getItem(Long.toString(id)) != null;
	}

	    
    public List<MenuItem> getItemsFromMenu(String menuId){
    	EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM MenuItem where menuId = @id	");
    	request.setNamedBinding("id", menuId);
		QueryResponse<MenuItem> response = em.executeEntityQueryRequest(MenuItem.class, request);
		List<MenuItem> menu = response.getResults();
		return menu;
    }
}
