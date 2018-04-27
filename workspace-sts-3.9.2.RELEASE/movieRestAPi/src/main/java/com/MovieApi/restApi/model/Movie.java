package com.MovieApi.restApi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="movies")
public class Movie {
	@Id
private String id;
private String name;
private int year;
private String description;
private String director;
private String writer;
private String mainStar;
private String url;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getYear() {
	return year;
}
public void setYear(int year) {
	this.year = year;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getDirector() {
	return director;
}
public void setDirector(String director) {
	this.director = director;
}
public String getWriter() {
	return writer;
}
public void setWriter(String writer) {
	this.writer = writer;
}
public String getMainStar() {
	return mainStar;
}
public void setMainStar(String mainStar) {
	this.mainStar = mainStar;
}
public String getUrl() {
	return url;
}
public void setUrl(String url) {
	this.url = url;
}

	
}
