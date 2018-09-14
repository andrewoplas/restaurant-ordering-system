package com.webtech.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.webtech.Model.MenuItem;
import java.util.*;

import com.webtech.Service.MenuItemService;


@RestController
public class MenuItemController extends BaseController implements CONTROLLER<MenuItem>{

    @Autowired
    MenuItemService taskservice;

    @CrossOrigin
    @RequestMapping(path = "/items", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> getItems() {
        return taskservice.getItems();
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/item/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public MenuItem getItem(@PathVariable(name = "id", required = true) String id) {
        return taskservice.getItem(id);
    }

    @CrossOrigin
    @RequestMapping(path = "/item", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public MenuItem create(@RequestBody(required = true) MenuItem menuItem) {
        return taskservice.create(menuItem);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.DELETE, path = "/item/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean delete(@PathVariable(name = "id", required = true) String id) {
        taskservice.delete(id);
        return true;
    }

    @CrossOrigin
    @RequestMapping(path = "item", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void update(@RequestBody(required = true) MenuItem menuItem) {
        taskservice.update(menuItem);
    }

}
