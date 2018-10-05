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
	public List<User> create(User obj) {
		 repository.create(obj);
		return repository.getItems();
	}

	@Override
	public List<User> update(User obj) {
		repository.update(obj);
		return repository.getItems();
	}

	@Override
	public List<User> delete(String id) {
		boolean result = false;
		
		try {		
			Long longId = Long.parseLong(id);
			if(userExist(longId)) {
				result = repository.delete(id);
				return repository.getItems();
			}
			else {
				return null;
			}
		} catch (Exception ex) {
			System.out.print("DELETESERVICE");
			return null;
		}
		
		
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
