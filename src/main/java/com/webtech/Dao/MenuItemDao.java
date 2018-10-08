package com.webtech.Dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.MenuItem;

@Repository
public class MenuItemDao implements REPOSITORY<MenuItem>{


	@Override
	public MenuItem create(MenuItem obj) {
		MenuItem insertedMenu = null;
		
		try {
			insertedMenu = em.insert(obj);
			System.out.println("SUCCESS");
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
	
	public boolean itemExist(String name) {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `MenuItem` WHERE name=@menu_item_name");
		request.setNamedBinding("menu_item_name", name);
		QueryResponse<MenuItem> response = em.executeEntityQueryRequest(MenuItem.class, request);
		
		return !response.getResults().isEmpty();
	}

	    
    public List<MenuItem> getItemsFromMenu(String menuId){
    	EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM MenuItem where menuId = @id	");
    	request.setNamedBinding("id", menuId);
		QueryResponse<MenuItem> response = em.executeEntityQueryRequest(MenuItem.class, request);
		List<MenuItem> menu = response.getResults();
		return menu;
    }
}
