package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.FeedBackDao;
import com.webtech.Dao.OrderDao;
import com.webtech.Model.FeedBack;
import com.webtech.Model.Menu;
import com.webtech.Model.Order;
import com.webtech.Model.OrderStatus;

@Service
public class FeedBackService implements SERVICE<FeedBack> {		
	@Autowired
	private FeedBackDao repository;
	
	@Override
	public List<FeedBack> create(FeedBack obj) {
		repository.create(obj);
		return repository.getItems();
	}

	@Override
	public List<FeedBack> update(FeedBack obj) {
		repository.update(obj);
		return repository.getItems();
	}

	@Override
	public List<FeedBack> delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			FeedBack menu = repository.getItem(id);
			if(menu != null) {
				result = repository.delete(id);
				return repository.getItems();
			}else {
				return null;
			}
			
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
			return null;
		}
		
		
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