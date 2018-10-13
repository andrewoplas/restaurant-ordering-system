package com.webtech.Model;

public class ErrorResponseModel {
	String message; 
	boolean error;
	
	public ErrorResponseModel(String s, String message) {
		this.message = message;
		this.error = true;
	}
	
    public ErrorResponseModel(String message) {
    	this.message = message;
    	this.error = true;
    }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isError() {
		return error;
	}

	public void setError(boolean error) {
		this.error = error;
	}  
}
