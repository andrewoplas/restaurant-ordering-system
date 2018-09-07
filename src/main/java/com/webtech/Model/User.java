package com.webtech.Model;

public class User {
    private String username;
    private String password;
    private String role;
    private String name;
    
    /**
     * @return the name
     */
    public String getName() {
        return name;
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
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
}