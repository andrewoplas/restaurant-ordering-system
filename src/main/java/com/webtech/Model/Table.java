package com.webtech.Model;

import com.google.appengine.api.datastore.Key;
import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "Table")
public class Table{
    
	@Identifier
    private String id;
	
	@Property(name = "capacity")
	
	
	
    private int capacity;
	public Table(String id, int capacity) {
		
		this.id = id;
		this.capacity = capacity;
	}
	
	public Table(int capacity) {
		
		this.capacity = capacity;
	}
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}
	
	/**
	 * @return the capacity
	 */
	public int getCapacity() {
		return capacity;
	}
	/**
	 * @param capacity the capacity to set
	 */
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
}