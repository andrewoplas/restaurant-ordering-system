package com.webtech.Service;


import com.webtech.Dao.TaskRepo;
import com.webtech.Model.TaskEntity;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService implements SERVICE<TaskEntity>{
    
    @Autowired
    TaskRepo taskrepo;

    @Override
    public List<TaskEntity> getItems(){
        return taskrepo.getItems(null);
    }

    @Override
    public TaskEntity getItem(String id){
        return taskrepo.getItem(Long.valueOf(id));
    }
    
    @Override
    public TaskEntity create(TaskEntity task ){
        Optional<Long> id = taskrepo.addObject(task);
        id.ifPresent(i -> task.setId(i.toString()));
        return task;
    }

    @Override
    public boolean delete(String id){
        taskrepo.delete(Long.valueOf(id));
        return true;
    }

    @Override
    public void update(TaskEntity task){
        taskrepo.update(task);
    }

	
}
