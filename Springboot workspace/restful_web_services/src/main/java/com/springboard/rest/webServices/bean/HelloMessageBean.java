package com.springboard.rest.webServices.bean;

public class HelloMessageBean {
	String message;

	public HelloMessageBean(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
