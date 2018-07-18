package com.webtech.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.webtech.Model.TaskEntity;
import java.util.*;

import com.webtech.Service.TaskService;

@RestController
public class TaskController extends BaseController {

    @Autowired
    TaskService taskservice;

    @CrossOrigin
    @RequestMapping(path = "/tasks", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TaskEntity> gets() {
        return taskservice.getListTask();
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/task/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public TaskEntity get(@PathVariable(name = "id", required = true) String id) {
        return taskservice.getTask(id);
    }

    @CrossOrigin
    @RequestMapping(path = "/task", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public TaskEntity create(@RequestBody(required = true) TaskEntity task) {
        return taskservice.createTask(task);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.DELETE, path = "/task/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@PathVariable(name = "id", required = true) String id) {
        taskservice.deleteTask(id);
    }

    @CrossOrigin
    @RequestMapping(path = "/task", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void update(@RequestBody(required = true) TaskEntity task) {
        taskservice.updateTask(task);
    }

}
