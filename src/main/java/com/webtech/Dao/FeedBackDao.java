package com.webtech.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.FeedBack;

@Repository
public class FeedBackDao implements REPOSITORY<FeedBack> {
	
	@Override
	public FeedBack create(FeedBack obj) {
		FeedBack insertedFeedBack = null;
		System.out.println(obj.toString());
		try {
			insertedFeedBack = em.insert(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
		
		return insertedFeedBack;
	}

	@Override
	public void update(FeedBack obj) {
		try {
			em.update(obj);			
		} catch (Exception ex) {
			System.out.println("UPDATEDAO: " + ex.getMessage());
		}
	}

	@Override
	public boolean delete(String id) {
		try {
			em.delete(FeedBack.class, Long.parseLong(id));
			return true;
		} catch (Exception ex) {
			System.out.println("DELETEDAO: " + ex.getMessage());
		}
		
		return false;
	}
	
	public List<FeedBack> getItems() {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `FeedBack`");
		QueryResponse<FeedBack> response = em.executeEntityQueryRequest(FeedBack.class, request);
		List<FeedBack> obj = response.getResults();
		return obj;
	}

	@Override
	public FeedBack getItem(String id) {
		return em.load(FeedBack.class, Long.parseLong(id));
	}

	
	
	public boolean itemExist(long id) {
		return getItem(Long.toString(id)) != null;
	}

	

	

	
}
