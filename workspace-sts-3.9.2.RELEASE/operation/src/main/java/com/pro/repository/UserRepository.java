package com.pro.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pro.model.User;

public class UserRepository extends Mong	oRepository<User, String> {

    public User findOneByName(String name)
    {
    	
    }
	
    
}

