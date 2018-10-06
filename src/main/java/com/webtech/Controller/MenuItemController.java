package com.webtech.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.webtech.Model.MenuItem;
import java.util.*;

import com.webtech.Service.MenuItemService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MenuItemController extends BaseController implements CONTROLLER<MenuItem>{

    @Autowired
    MenuItemService taskservice;

    @CrossOrigin
    @RequestMapping(path = "/get-all-items", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> getItems() {
        return taskservice.getItems();
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/item/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public MenuItem getItem(@PathVariable(name = "id", required = true) String id) {
        return taskservice.getItem(id);
    }

    @CrossOrigin
    @RequestMapping(path = "/item", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> create(@RequestBody(required = true) MenuItem menuItem) {
        return taskservice.create(menuItem);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.DELETE, path = "/delete-item/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> delete(@PathVariable(name = "id", required = true) String id) {
        return taskservice.delete(id);
    }

    @CrossOrigin
    @RequestMapping(path = "update-item", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> update(@RequestBody(required = true) MenuItem menuItem) {
        return taskservice.update(menuItem);
    }

}
