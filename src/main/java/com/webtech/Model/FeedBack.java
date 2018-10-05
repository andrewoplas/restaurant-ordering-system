package com.webtech.Model;

import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "FeedBack")
public class FeedBack {

	@Identifier
	private Long id;

	@Property(name="overall")
	private int overallQuality;

	@Property(name="food")
	private int foodQuality;

	@Property(name="staff")
	private int staffQuality;

	// public FeedBack(){}
	// public FeedBack(int foodQuality, int staffQuality, int overallQuality){
	// 	this.staffQuality = staffQuality;
	// 	this.foodQuality = foodQuality;
	// 	this.overallQuality = overallQuality;

	// }
	// public FeedBack(Long id, int foodQuality, int staffQuality, int overallQuality){
	// 		this.id = id;
	// 		this.staffQuality = staffQuality;
	// 		this.foodQuality = foodQuality;
	// 		this.overallQuality = overallQuality;

	// }
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
	 * @return the overallQuality
	 */
	public int getOverallQuality() {
		return overallQuality;
	}
	/**
	 * @param overallQuality the overallQuality to set
	 */
	public void setOverallQuality(int overallQuality) {
		this.overallQuality = overallQuality;
	}
	/**
	 * @return the foodQuality
	 */
	public int getFoodQuality() {
		return foodQuality;
	}
	/**
	 * @param foodQuality the foodQuality to set
	 */
	public void setFoodQuality(int foodQuality) {
		this.foodQuality = foodQuality;
	}
	/**
	 * @return the staffQuality
	 */
	public int getStaffQuality() {
		return staffQuality;
	}
	/**
	 * @param staffQuality the staffQuality to set
	 */
	public void setStaffQuality(int staffQuality) {
		this.staffQuality = staffQuality;
	}


}
