package com.movie.model;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Movie  implements Serializable{
	 @Id
	    private Integer id;
	    private String title;
	    private String overview;
	    private Float rating;

	    public Movie() {
	    	
	    }
	    
 public Movie(Integer id, String title, String overview, Float rating) {
	        this.id = id;
	        this.title = title;
	        this.overview = overview;
	        this.rating = rating;
	    }

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

public String getOverview() {
	return overview;
}

public void setOverview(String overview) {
	this.overview = overview;
}

public Float getRating() {
	return rating;
}

public void setRating(Float rating) {
	this.rating = rating;
}
 
}
