package com.webtech.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.LoginUser;
import com.webtech.Model.User;

@Repository
public class UserDao implements REPOSITORY<User> {
	
	@Override
	public User create(User obj) {
		User insertedUser = null;
		
		try {
			insertedUser = em.insert(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
		
		return insertedUser;
	}

	@Override
	public void update(User obj) {
		try {
			em.update(obj);			
		} catch (Exception ex) {
			System.out.println("UPDATEDAO: " + ex.getMessage());
		}
	}

	@Override
	public boolean delete(String id) {
		try {
			em.delete(User.class, Long.parseLong(id));
			return true;
		} catch (Exception ex) {
			System.out.println("DELETEDAO: " + ex.getMessage());
		}
		
		return false;
	}
	
	public List<User> getItems() {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `User`");
		QueryResponse<User> response = em.executeEntityQueryRequest(User.class, request);
		List<User> obj = response.getResults();
		return obj;
	}

	@Override
	public User getItem(String id) {
		return em.load(User.class, Long.parseLong(id));
	}

	@Override
	public User entityToObject(Entity entity) {
		return null;
	}

	@Override
	public boolean itemExist(long id) {
		return getItem(Long.toString(id)) != null;
	}

	//@Override
	public Optional<Long> addObject(User obj) {
        return null;
	}

	public List<User> getUser(LoginUser user) {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `User` WHERE username=@user AND password=@pass");
		request.setNamedBinding("user", user.getUsername());
		request.setNamedBinding("pass", user.getPassword());
		QueryResponse<User> response = em.executeEntityQueryRequest(User.class, request);
		
		return response.getResults();
	}

}
