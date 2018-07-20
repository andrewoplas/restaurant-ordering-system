package com.webtech.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.webtech.Model.TaskEntity;
import java.util.*;

import com.webtech.Service.TaskService;

@RestController
public class TaskController extends BaseController implements CONTROLLER<TaskEntity>{

    @Autowired
    TaskService taskservice;

    @CrossOrigin
    @RequestMapping(path = "/tasks", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TaskEntity> getItems() {
        return taskservice.getItems();
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/task/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public TaskEntity getItem(@PathVariable(name = "id", required = true) String id) {
        return taskservice.getItem(id);
    }

    @CrossOrigin
    @RequestMapping(path = "/task", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public TaskEntity create(@RequestBody(required = true) TaskEntity task) {
        return taskservice.create(task);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.DELETE, path = "/task/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean delete(@PathVariable(name = "id", required = true) String id) {
        taskservice.delete(id);
        return true;
    }

    @CrossOrigin
    @RequestMapping(path = "/task", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void update(@RequestBody(required = true) TaskEntity task) {
        taskservice.update(task);
    }

}
