package com.webtech.Model;

import java.util.Date;

import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "FeedBack")
public class FeedBack {

	@Identifier
	private Long id;

	@Property(name="overall" , indexed=true)
	private int overallQuality;

	@Property(name="food" , indexed=true)
	private int foodQuality;

	@Property(name="staff" , indexed=true) 
	private int staffQuality;
	
	@Property(name="date" , indexed=true) 
	private Date date;
	
	public FeedBack() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getOverallQuality() {
		return overallQuality;
	}

	public void setOverallQuality(int overallQuality) {
		this.overallQuality = overallQuality;
	}

	public int getFoodQuality() {
		return foodQuality;
	}

	public void setFoodQuality(int foodQuality) {
		this.foodQuality = foodQuality;
	}

	public int getStaffQuality() {
		return staffQuality;
	}

	public void setStaffQuality(int staffQuality) {
		this.staffQuality = staffQuality;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	
	
}
