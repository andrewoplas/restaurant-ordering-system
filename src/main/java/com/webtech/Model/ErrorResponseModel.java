package com.webtech.Model;

public class ErrorResponseModel {
	String message; 
	
	public ErrorResponseModel(String s, String message) {
		this.message = message;
	}
	
    public ErrorResponseModel(String message) {
    	this.message = message;
    }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}  
}
