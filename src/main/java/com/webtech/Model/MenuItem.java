package com.webtech.Model;

import com.google.appengine.api.datastore.Key;
import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "MenuItem")
public class MenuItem {
	

	
	@Identifier
	private Long id;

	@Property(name="name",indexed=true)
	private String name;

	@Property(name="menuId",indexed=true)
	private String menuId;

	
	
	@Property(name="description")
	private String description;

	@Property(name="price",indexed=true)
	private double price;
	
	
	
	@Property(name="cooking_time",indexed=true)
	private int cooking_time;

	@Property(name="max_servings",indexed=true)
	private int serving;

	@Property(name="image_link")
	private String picture;

	
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the picture
	 */
	public String getPicture() {
		return picture;
	}

	/**
	 * @param picture the picture to set
	 */
	public void setPicture(String picture) {
		this.picture = picture;
	}

	/**
	 * @return the serving
	 */
	public int getServing() {
		return serving;
	}

	/**
	 * @param serving the serving to set
	 */
	public void setServing(int serving) {
		this.serving = serving;
	}

	/**
	 * @return the cooking_time
	 */
	public int getCooking_time() {
		return cooking_time;
	}

	/**
	 * @param cooking_time the cooking_time to set
	 */
	public void setCooking_time(int cooking_time) {
		this.cooking_time = cooking_time;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}
	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}



	public String getMenuId() {
		return menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}

}