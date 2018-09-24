/**
 * 
 */
package com.webtech.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Menu;
import com.webtech.Model.MenuItem;

/**
 * @author Jean Mikhael Fuentes
 *
 */
@Repository
public class MenuRepo implements REPOSITORY<Menu> {

	@Override
	public Menu create(Menu obj) {
		// TODO Auto-generated method stub
		Menu insertedMenu = null ; 
		try {
			insertedMenu = em.insert(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
		
        return insertedMenu;
		
	}

	@Override
	public void update(Menu obj) {
		// TODO Auto-generated method stub
		
		try {
			em.update(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
	}

	@Override
	public boolean delete(String id) {
		// TODO Auto-generated method stub
		
		try {
			em.delete(Menu.class, id);
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
		return true	;
	}

	@Override
	public List<Menu> getItems() {
		// TODO Auto-generated method stub
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM Menu");
		QueryResponse<Menu> response = em.executeEntityQueryRequest(Menu.class, request);
		List<Menu> menu = response.getResults();
		return menu;
	}

	@Override
	public Menu getItem(String id) {
		// TODO Auto-generated method stub
		return em.load(Menu.class, id);
	}

	@Override
	public Menu entityToObject(Entity entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean itemExist(long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Optional<Long> addObject(Menu obj) {
		// TODO Auto-generated method stub
		obj = em.insert(obj);
        return Optional.of(Long.parseLong(obj.getId()));
	}

}