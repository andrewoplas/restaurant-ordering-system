package com.webtech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



import com.webtech.Model.MenuItem;
import com.webtech.Service.MenuItemService;

@Controller
@RestController
public class MenuController extends BaseController implements CONTROLLER<MenuItem>{

//    @Autowired
//	MenuService taskservice;
//	
	@CrossOrigin
    @RequestMapping(path = "/menu", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public @ResponseBody MenuItem create(MenuItem obj) {
		// TODO Auto-generated method stub
		return null;
	}
	@CrossOrigin
    @RequestMapping(path = "/menu", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public void update(MenuItem obj) {
		// TODO Auto-generated method stub
		
	}

	@CrossOrigin
    @RequestMapping(path = "/menu/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Override
	public boolean delete(String id) {
		// TODO Auto-generated method stub
		return false;
	}

	@CrossOrigin
    @RequestMapping(path = "/menus", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Override
	public List<MenuItem> getItems() {
		// TODO Auto-generated method stub
		return null;
	}

	@CrossOrigin
    @RequestMapping(path = "/menu/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Override
	public MenuItem getItem(String id) {
		// TODO Auto-generated method stub
		return null;
	}
	
}