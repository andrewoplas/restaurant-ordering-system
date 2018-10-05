package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.FeedBackDao;
import com.webtech.Dao.OrderDao;
import com.webtech.Model.FeedBack;
import com.webtech.Model.Order;
import com.webtech.Model.OrderStatus;

@Service
public class FeedBackService implements SERVICE<FeedBack> {		
	@Autowired
	private FeedBackDao repository;
	
	@Override
	public FeedBack create(FeedBack obj) {
		return repository.create(obj);
	}

	@Override
	public void update(FeedBack obj) {
		repository.update(obj);
	}

	@Override
	public boolean delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			
			
				result = repository.delete(id);
			
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
		}
		
		return result;
	}

	@Override
	public List<FeedBack> getItems() {
		return repository.getItems();
	}

	@Override
	public FeedBack getItem(String id) {		
		return repository.getItem(id);
	}

}