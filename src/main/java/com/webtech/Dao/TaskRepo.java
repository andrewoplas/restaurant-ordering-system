package com.webtech.Dao;

import com.google.appengine.api.datastore.*;
import com.webtech.Model.TaskEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Repository
public class TaskRepo implements REPOSITORY<TaskEntity>{

    private final static String KIND = "Task";

    @Autowired
    com.google.appengine.api.datastore.DatastoreService datastore;

    public TaskEntity entityToObject(Entity entity) {
        return new TaskEntity.Builder()
                .description((String) entity.getProperty(TaskEntity.DESCRIPTION))
                .id(Long.valueOf((String)entity.getProperty(TaskEntity.ID)))
                .untilDate((String) entity.getProperty(TaskEntity.UNTIL_DATE))
                .build();
    }

    
    public Optional<Long> addObject(TaskEntity task) {
        Entity incTaskEntity = new Entity(KIND);
        incTaskEntity.setProperty(TaskEntity.DESCRIPTION, task.getDescription());
        incTaskEntity.setProperty(TaskEntity.UNTIL_DATE, task.getUntilDate());
        incTaskEntity.setProperty(TaskEntity.PRIORITY, task.getPriority());
        Key k = datastore.put(incTaskEntity);
        return Optional.of(k.getId());
    }

    
    public TaskEntity getItem(Long taskId) {
        Entity taskEntity = null;
        try {
            taskEntity = datastore.get(KeyFactory.createKey(KIND, taskId));
        } catch (EntityNotFoundException e) {
            return null;
        }
        return entityToObject(taskEntity);
    }

    
    public void update(TaskEntity task) {
        Key key = KeyFactory.createKey(KIND, task.getId());
        Entity entity = new Entity(key);
        entity.setProperty(TaskEntity.DESCRIPTION, task.getDescription());
        entity.setProperty(TaskEntity.UNTIL_DATE, task.getUntilDate());
        entity.setProperty(TaskEntity.PRIORITY, task.getPriority());
        datastore.put(entity);
    }

    
    public boolean delete(Long taskId) {
        Key key = KeyFactory.createKey(KIND, taskId);
        datastore.delete(key);
        return true;
    }

    public List<TaskEntity> entitiesToObjects(Iterator<Entity> resultList) {
        List<TaskEntity> resultTasks = new ArrayList<>();
        while (resultList.hasNext()) {
            resultTasks.add(entityToObject(resultList.next()));
        }
        return resultTasks;
    }

    
	public List<TaskEntity> getItems() {
		return getItems(null);
    }
    
    public List<TaskEntity> getItems(String startCursorString) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(10);
        if (startCursorString != null && !startCursorString.equals("")) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(startCursorString));
        }
        Query query = new Query(KIND)
                .addSort(TaskEntity.DESCRIPTION, Query.SortDirection.ASCENDING);
        PreparedQuery preparedQuery = datastore.prepare(query);
        QueryResultIterator<Entity> results = preparedQuery.asQueryResultIterator(fetchOptions);

        List<TaskEntity> resultBooks = entitiesToObjects(results);
        Cursor cursor = results.getCursor();
       
            return resultBooks;
        
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
