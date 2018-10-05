package com.webtech.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Menu;

@Repository
public class MenuDao implements REPOSITORY<Menu> {

	@Override
	public Menu create(Menu obj) {
		Menu insertedMenu = null;
		
		try {
			insertedMenu = em.insert(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTMENU: " + ex.getMessage());
		}
		
		return insertedMenu;
	}

	@Override
	public void update(Menu obj) {
		try {
			em.update(obj);			
		} catch (Exception ex) {
			System.out.println("UPDATEMENU: " + ex.getMessage());
		}
	}

	@Override
	public boolean delete(String id) {
		try {
			em.delete(Menu.class, Long.parseLong(id));
			return true;
		} catch (Exception ex) {
			System.out.println("DELETEMENU: " + ex.getMessage());
		}
		
		return false;
	}
	
	public List<Menu> getItems() {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `Menu`");
		QueryResponse<Menu> response = em.executeEntityQueryRequest(Menu.class, request);
		List<Menu> obj = response.getResults();
		return obj;
	}

	@Override
	public Menu getItem(String id) {
		return em.load(Menu.class, Long.parseLong(id));
	}

	@Override
	public Menu entityToObject(Entity entity) {
		return null;
	}

	@Override
	public boolean itemExist(long id) {
		return getItem(Long.toString(id)) != null;
	}

	@Override
	public Optional<Long> addObject(Menu obj) {
		// TODO Auto-generated method stub
		return null;
	}
}