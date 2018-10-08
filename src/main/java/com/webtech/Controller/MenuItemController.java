package com.webtech.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.MenuItem;
import com.webtech.Service.MenuItemService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MenuItemController extends BaseController implements CONTROLLER<MenuItem>{

    @Autowired
    MenuItemService service;

    @CrossOrigin	
    @GetMapping(path = "/get-all-items", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> getItems() {
        return service.getItems();
    }

    @CrossOrigin
    @GetMapping(path = "/item/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public MenuItem getItem(@PathVariable(name = "id", required = true) String id) {
        return service.getItem(id);
    }

    @CrossOrigin
    @PostMapping(path = "/add-item", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<MenuItem> create(@RequestBody MenuItem menuItem) {
		menuItem.toString();
        return service.create(menuItem);
    }

    @CrossOrigin
    @DeleteMapping(path = "/delete-item/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> delete(@PathVariable(name = "id", required = true) String id) {
        return service.delete(id);
    }

    @CrossOrigin
    @PutMapping(path = "/update-item", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<MenuItem> update(@RequestBody(required = true) MenuItem menuItem) {
        return service.update(menuItem);
    }

}