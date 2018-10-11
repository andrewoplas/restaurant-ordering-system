package com.webtech.Model;

import java.util.Date;
import java.util.List;

import com.jmethods.catatumbo.Embedded;
import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "Order")
public class Order {
	
	@Identifier
	private Long id;
	
	private double amount;
	
    private String status;
	
	@Property(name="table_id")
	private int tableId;
	
	@Property(name="order_number", indexed = true)
	private String orderNumber;
    	
    @Property(name="menu_item")
    private List<MenuItemQuantity> menuItem;
    
    @Property(name="date_created")
    private Date dateCreated;
    
    
    
    public Order() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getTableId() {
		return tableId;
	}

	public void setTableId(int tableId) {
		this.tableId = tableId;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public List<MenuItemQuantity> getMenuItem() {
		return menuItem;
	}

	public void setMenuItem(List<MenuItemQuantity> menuItem) {
		this.menuItem = menuItem;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}	
}