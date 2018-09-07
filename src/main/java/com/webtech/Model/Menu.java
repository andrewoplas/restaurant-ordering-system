package com.webtech.Model;

import java.util.List;

import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "Menu")
public class Menu {

	@Identifier
    private String id;
	
	
	@Property(name="name",indexed=true)
	private String name;
    private String description;
    private List<MenuItem> items;
	
}