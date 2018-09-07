package com.webtech.Model;

import java.util.List;

import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;

@Entity(kind = "Menu")
public class Menu {

	@Identifier
    private String id;
	
	
	
	private String name;
    private String description;
    private List<MenuItem> items;
	
}