package com.feedback;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Feedback { 
	public String name;
	private String email;
	public String rating;
	public String message;
	
	public Feedback(String name, String email,String rating, String message)
	{   
		this.name=name;
		this.email=email;
		this.rating = rating;
		this.message =message;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Feedback() {
    	super();
    }
	
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
     
}
