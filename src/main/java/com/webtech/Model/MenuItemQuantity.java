package com.webtech.Model;

import com.jmethods.catatumbo.Embeddable;
import com.jmethods.catatumbo.Ignore;

@Embeddable
public class MenuItemQuantity {
	
	@Ignore
	private MenuItem item;
	private Long id;
	private double price;
	private boolean onSale;
	private int quantity;
	
	public MenuItemQuantity() { }

	public MenuItem getItem() {
		return item;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setItem(MenuItem item) {
		this.item = item;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean isOnSale() {
		return onSale;
	}

	public void setOnSale(boolean onSale) {
		this.onSale = onSale;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
