package com.example.controller;

import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.repository.CrudRepository;


@RestController
@RequestMapping("/User")
public class CrudController {
	 @Autowired
	    CrudRepository call;

	    @RequestMapping(method = RequestMethod.POST,value="/ad", consumes = MediaType.APPLICATION_JSON_VALUE)
	    public void create(@RequestBody User movie) {
	        call.save(movie);
	    }

	    @RequestMapping(value = "/{id}") 
	    public User read(@PathVariable String id) {
	        return call.findOneByName(id);
	    }

	    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	    public void update(@RequestBody User movie) {
	        call.save(movie);
	    }

	    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE) 
	    public void delete(@PathVariable String id) {
	        call.deleteById(id); 
	    }
	
}
