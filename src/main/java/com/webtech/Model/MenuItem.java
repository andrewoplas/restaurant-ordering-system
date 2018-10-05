package com.webtech.Model;

import com.google.appengine.api.datastore.Key;
import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;

@Entity(kind = "MenuItem")
public class MenuItem {
	
	
	public static final String ID = "id";
	public static final String NAME = "name";
	
    public static final String DESCRIPTION = "description";
	public static final String PRICE = "price";
	public static final String COOKING_TIME = "cooking_time";
	public static final String SERVING = "max_servings";
	public static final String PICTURE = "image_link";
	
	private Key key;
    
	
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

	public MenuItem(){}

	public MenuItem(Long id, String menuId,String name, String description , Double price, int cooking_time, int serving , String picture) {
        this.id = id;
        this.description = description;
        this.name = name;
		this.price = price;
		this.menuId = menuId;
		this.cooking_time = cooking_time;
		this.serving = serving;
		this.picture = picture;

	}
	
	public MenuItem(String name, String description , Double price,int cooking_time, int serving , String picture) {
        
        this.description = description;
        this.name = name;
		this.price = price;
		this.cooking_time = cooking_time;
		this.serving = serving;
		this.picture = picture;

	}
	
	private MenuItem(Builder builder) {
        this.id = builder.id;
        this.description = builder.description;
        this.name = builder.name;
		this.price = builder.price;
		this.cooking_time = (builder.cooking_time);
		this.serving = (builder.serving);
		this.picture =(builder.picture);


    }

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



	public static class Builder {
        private Long id;
		private String name;
		private String description;
		private double price;
		private int cooking_time;
		private int serving;
		private String picture;

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder price(double price) {
            this.price = price;
            return this;
		}
		
		

        public Builder description(String description) {
            this.description = description;
            return this;
        }


        public Builder id(Long id) {
            this.id = id;
            return this;
        }
		public Builder cooking_time(int cooking_time) {
            this.cooking_time = cooking_time;
            return this;
		}
		public Builder serving(int serving) {
            this.serving = serving;
            return this;
		}
		public Builder picture(String picture) {
            this.picture = picture;
            return this;
        }
        public MenuItem build() {
            return new MenuItem(this);
        }
    }
}