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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.FeedBack;
import com.webtech.Service.FeedBackService;

@RestController
@RequestMapping("/")
public class FeedBackController extends BaseController implements CONTROLLER<FeedBack> {
	
	@Autowired
	FeedBackService service;
	
	@CrossOrigin
    @PostMapping(path = "/feedback", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<FeedBack> create(@RequestBody(required = true) FeedBack obj) {
		System.out.println(obj.getStaffQuality() + " -- " + obj.getOverallQuality() + " -- " + obj.getFoodQuality());
		return service.create(obj);
	}
	
	@CrossOrigin
    @PutMapping(path = "/update-feedback", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<FeedBack> update(@RequestBody(required = true)FeedBack obj) {
		return service.update(obj);
	}
	
	@CrossOrigin
    @DeleteMapping(path = "/delete-feedback/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<FeedBack> delete(@PathVariable(name = "id", required = true) String id) {
		return service.delete(id);
	}
	
	@CrossOrigin
	@GetMapping(path = "/get-all-feedbacks", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<FeedBack> getItems() {
		return service.getItems();
	}
	
	@CrossOrigin
    @GetMapping(path = "/feedback/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public FeedBack getItem(@PathVariable(name = "id", required = true)String id) {
		return service.getItem(id);
	}

}