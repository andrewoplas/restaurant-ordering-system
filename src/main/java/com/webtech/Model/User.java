package com.webtech.Model;

import com.google.appengine.api.datastore.Key;
import com.jmethods.catatumbo.Entity;
import com.jmethods.catatumbo.Identifier;
import com.jmethods.catatumbo.Property;


@Entity(kind = "User")
public class User {

	public static final String ID = "id";
	public static final String USERNAME = "username";
	public static final String PASSWORD = "password";
	private static final String ROLE = "role";
	private static final String NAME = "name";

	@Identifier
	private String userId;

	@Property(name="username",indexed = true)
    private String username;

	@Property(name="password")
    private String password;

	@Property(name="role",indexed = true)
    private String role;

	@Property(name="name", indexed = true)
    private String name;
    
	public User(){}

	public User(String id, String name,String role, String username, String password){
		this.userId = id;
		this.name = name;
		this.username = username;
		this.role = role;
		this.password = password;
	}

	private MenuItem(Builder builder) {
        this.userId = (String.valueOf(builder.id));
        this.name = builder.name;
		this.password = builder.password;
		this.username = (builder.username);
		this.role = (builder.role);
    }

	/**
	 * @return the userId
	 */
	public String getUserId() {
		return this.userId;
	}
	/**
	 * @param id the id to set
	 */
	public void setRole(String id) {
		this.userId = id;
	}
    /**
	 * @return the role
	 */
	public String getRole() {
		return role;
	}
	/**
	 * @param role the role to set
	 */
	public void setRole(String role) {
		this.role = role;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}
	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }
	/**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }


	public static class Builder {
        private Long id;
		private String name;
		private String username;
		private String password;
		private String role;

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder username(String username) {
            this.username = username;
            return this;
		}

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }
		public Builder role(String role) {
            this.role = role;
            return this;
		}

        public User build() {
            return new MenuItem(this);
        }
    }
}