package com.webtech.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.Dao.UserDao;
import com.webtech.Model.LoginUser;
import com.webtech.Model.User;

@Service
public class UserService implements SERVICE<User> {		
	@Autowired
	private UserDao repository;
	
	@Override
	public User create(User obj) {
		return repository.create(obj);
	}

	@Override
	public void update(User obj) {
		repository.update(obj);
	}

	@Override
	public boolean delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			if(userExist(longId)) {
				result = repository.delete(id);
			}
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
		}
		
		return result;
	}

	private boolean userExist(Long longId) {
		// TODO Auto-generated method stub
		return repository.itemExist(longId);
	}

	@Override
	public List<User> getItems() {
		return repository.getItems();
	}

	@Override
	public User getItem(String id) {		
		return repository.getItem(id);
	}
	
	public User login(LoginUser user) {	
		List<User> response = repository.getUser(user);

		return response.size() == 0? null : response.get(0);
	}	
}
