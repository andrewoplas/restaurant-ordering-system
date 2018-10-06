package com.webtech.Model;

import java.util.List;

import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Ignore;
import com.jmethods.catatumbo.Property;

@Entity(kind = "Menu")
public class Menu {

	@Identifier
    private Long id;
	
	@Property(name="name", indexed=true)
	private String name;
	
    private String description;
	
	private boolean show;
	
    private List<Integer> menu_items;
	
    @Ignore
    private List<MenuItem> items;
    
    public Menu() { }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isShow() {
		return show;
	}

	public void setShow(boolean show) {
		this.show = show;
	}

	public List<Integer> getMenu_items() {
		return menu_items;
	}

	public void setMenu_items(List<Integer> menu_items) {
		this.menu_items = menu_items;
	}

	public List<MenuItem> getItems() {
		return items;
	}

	public void setItems(List<MenuItem> items) {
		this.items = items;
	}
}