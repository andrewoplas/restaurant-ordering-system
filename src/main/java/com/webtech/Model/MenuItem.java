package com.webtech.Model;

import java.util.List;

import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "MenuItem")
public class MenuItem {
	
	@Identifier
	private Long id;

	private String name;

	@Property(name="menu_id",indexed=true)
	private Long menuId;	
		
	private String description;

	private double price;
	
	@Property(name="sale_price",indexed=true)
	private double salePrice;
		
	@Property(name="cooking_time",indexed=true)
	private int cookingTime;

	@Property(name="max_servings",indexed=true)
	private int maxServings;

	@Property(name="image_link")
	private String imageLink;
	
	private boolean show;
	
	private List<String> ingredients;
	
	public MenuItem() {
		
	}

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

	public Long getMenuId() {
		return menuId;
	}

	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(double salePrice) {
		this.salePrice = salePrice;
	}

	public int getCookingTime() {
		return cookingTime;
	}

	public void setCookingTime(int cookingTime) {
		this.cookingTime = cookingTime;
	}

	public int getMaxServings() {
		return maxServings;
	}

	public void setMaxServings(int maxServings) {
		this.maxServings = maxServings;
	}

	public String getImageLink() {
		return imageLink;
	}

	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}

	public boolean isShow() {
		return show;
	}

	public void setShow(boolean show) {
		this.show = show;
	}
		
	public List<String> getIngredients() {
		return ingredients;
	}

	public void setIngredients(List<String> ingredients) {
		this.ingredients = ingredients;
	}

	public String toString() {
		System.out.println(id);
		System.out.println(name);
		System.out.println(menuId);
		System.out.println(description);
		System.out.println(price);
		System.out.println(salePrice);
		System.out.println(cookingTime);
		System.out.println(maxServings);
		System.out.println(imageLink);
		System.out.println(show);
		
		for(String temp: ingredients) {
			System.out.println(temp);
		}
		
		return "";
	}
}