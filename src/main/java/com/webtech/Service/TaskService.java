package com.webtech.Service;


import com.webtech.Dao.TaskRepo;
import com.webtech.Model.TaskEntity;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService{
    
    @Autowired
    TaskRepo taskrepo;

    public List<TaskEntity> getListTask(){
        return taskrepo.listTasks(null);
    }

    public TaskEntity getTask(String id){
        return taskrepo.readTask(Long.valueOf(id));
    }

    public TaskEntity createTask(TaskEntity task ){
        Optional<Long> id = taskrepo.createTask(task);
        id.ifPresent(i -> task.setId(i.toString()));
        return task;
    }

    public void deleteTask(String id){
        taskrepo.deleteTask(Long.valueOf(id));
    }

    public void updateTask(TaskEntity task){
        taskrepo.updateTask(task);
    }
}
