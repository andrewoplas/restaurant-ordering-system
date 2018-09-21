package com.webtech.Dao;

import com.google.appengine.api.datastore.*;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Menu;
import com.webtech.Model.MenuItem;
import com.webtech.Model.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Repository
public class MenuItemRepo implements REPOSITORY<MenuItem>{

    private final static String KIND = "MenuItem";

    @Autowired
    com.google.appengine.api.datastore.DatastoreService datastore;
    
    @Override
    public MenuItem entityToObject(Entity entity) {
        return new MenuItem.Builder()
                            .id(entity.getKey().getId())
                            .name((String)entity.getProperty(MenuItem.NAME))
                            .description((String)entity.getProperty(MenuItem.DESCRIPTION))
                            .price((double)entity.getProperty(MenuItem.PRICE))
                            .cooking_time((int)entity.getProperty(MenuItem.COOKING_TIME))
                            .serving((int)entity.getProperty(MenuItem.SERVING))
                            .picture((String)entity.getProperty(MenuItem.PICTURE))
                            .build();
    }
    @Override
    public Optional<Long> addObject(MenuItem menuItem) {
       // Entity incTaskEntity = new Entity(KIND);
        
         
        //  incTaskEntity.setProperty(MenuItem.NAME, menuItem.getName());
        //  incTaskEntity.setProperty(MenuItem.DESCRIPTION, menuItem.getDescription());
        //  incTaskEntity.setProperty(MenuItem.PRICE, menuItem.getPrice());
        //  incTaskEntity.setProperty(MenuItem.COOKING_TIME, menuItem.getCooking_time());
        //  incTaskEntity.setProperty(MenuItem.SERVING, menuItem.getServing());
        //  incTaskEntity.setProperty(MenuItem.PICTURE, menuItem.getPicture());
        //  Key k = datastore.put(incTaskEntity);
        //  return Optional.of(k.getId());
        menuItem = em.insert(menuItem);
        return Optional.of(Long.parseLong(menuItem.getId()));
    }

    
    public MenuItem getItem(Long menuItemId) {
        
        return em.load(MenuItem.class, menuItemId);
    }

    @Override
    public void update(MenuItem menuItem) {
        em.update(menuItem);
    }

    
    public boolean delete(Long taskId) {
        Key key = KeyFactory.createKey(KIND, taskId);
        datastore.delete(key);
        return true;
    }
    
    public List<MenuItem> entitiesToObjects(Iterator<Entity> resultList) {
    	EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM MenuItem");
		QueryResponse<MenuItem> response = em.executeEntityQueryRequest(MenuItem.class, request);
		List<MenuItem> obj = response.getResults();
		return obj;
    }

    @Override
	public List<MenuItem> getItems() {
		return getItems(null);
    }
    
    
    public List<MenuItem> getItems(String startCursorString) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(10);
        if (startCursorString != null && !startCursorString.equals("")) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(startCursorString));
        }
        Query query = new Query(KIND)
                .addSort(MenuItem.DESCRIPTION, Query.SortDirection.ASCENDING);
        PreparedQuery preparedQuery = datastore.prepare(query);
        QueryResultIterator<Entity> results = preparedQuery.asQueryResultIterator(fetchOptions);

        List<MenuItem> resultBooks = entitiesToObjects(results);
        Cursor cursor = results.getCursor();
       
            return resultBooks;
        
    }
    

	@Override
	public MenuItem create(MenuItem obj) {
		return null;
	}

    @Deprecated
	@Override
	public MenuItem getItem(String id) {
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
    
    public List<MenuItem> getItemsFromMenu(String menuId){
    	EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM MenuItem where menuId = @id	");
    	request.setNamedBinding("id", menuId);
		QueryResponse<MenuItem> response = em.executeEntityQueryRequest(MenuItem.class, request);
		List<MenuItem> menu = response.getResults();
		return menu;
    }
}
