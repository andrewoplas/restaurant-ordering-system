package com.webtech.Dao;

import com.google.appengine.api.datastore.*;
import com.webtech.Model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepo implements REPOSITORY<TaskEntity>{

    private final static String KIND = "User";

    @Autowired
    com.google.appengine.api.datastore.DatastoreService datastore;

    public User entityToObject(Entity entity) {
        return new User.Builder()
            .name((String) entity.getProperty(User.NAME))
            .id(Long.valueOf((String)entity.getProperty(User.ID)))
            .username((String) entity.getProperty(USer.USERNAME))
            .password((String) entity.getProperty(User.PASSWORD))
            .role((String) entity.getProperty(User.ROLE))
            .build();
    }


    public Optional<Long> addObject(User user) {
        Entity incUser = new Entity(KIND);
        incUser.setProperty(User.NAME, user.getName();
        incUser.setProperty(User.ID, user.getId());
        incUser.setProperty(User.USERNAME, user.getUserName());
        incUser.setProperty(User.PASSWORD, user.getPassword());
        incUser.setProperty(User.ROLE, user.getRole());
        Key k = datastore.put(incUser);
        return Optional.of(k.getId());
    }


    public User getItem(Long userId) {
        Entity userEntity = null;
        try {
            userEntity = datastore.get(KeyFactory.createKey(KIND, userId));
        } catch (EntityNotFoundException e) {
            return null;
        }
        return entityToObject(userEntity);
    }


    public void update(User user) {
        Key key = KeyFactory.createKey(KIND, user.getId());
        Entity entity = new Entity(key);
        entity.setProperty(User.NAME, user.getName());
        entity.setProperty(User.USERNAME, user.getUserName());
        entity.setProperty(User.PASSWORD, user.getPassword());
        entity.setProperty(User.ROLE, user.getRole());
        datastore.put(entity);
    }


     public boolean delete(Long userId) {
        Key key = KeyFactory.createKey(KIND, userId);
        datastore.delete(key);
        return true;
    }

    public List<User> entitiesToObjects(Iterator<Entity> resultList) {
        List<User> resultUsers = new ArrayList<>();
        while (resultList.hasNext()) {
            resultUsers.add(entityToObject(resultList.next()));
        }
        return resultUsers;
    }

    
	public List<User> getItems() {
		return getItems(null);
    }
    
    public List<User> getItems(String startCursorString) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(10);
        if (startCursorString != null && !startCursorString.equals("")) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(startCursorString));
        }
        Query query = new Query(KIND)
                .addSort(User.NAME, Query.SortDirection.ASCENDING);
        PreparedQuery preparedQuery = datastore.prepare(query);
        QueryResultIterator<Entity> results = preparedQuery.asQueryResultIterator(fetchOptions);

        List<User> resultUsers = entitiesToObjects(results);
        Cursor cursor = results.getCursor();
       
            return resultUsers;
        
    }
    
    

    @Override
	public TaskEntity create(TaskEntity obj) {
		return null;
	}

    @Deprecated
	@Override
	public TaskEntity getItem(String id) {
		return null;
	}

	@Override
	public boolean itemExist(long id) {
		return false;
	}

    
    @Deprecated
	@Override
	public boolean delete(String id) {
		return false;
	}



}