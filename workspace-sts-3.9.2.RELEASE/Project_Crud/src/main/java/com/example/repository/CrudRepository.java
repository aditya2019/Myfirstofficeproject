package com.example.repository;

import org.apache.tomcat.jni.User;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface CrudRepository extends MongoRepository<User, String> {

    public User findOneByName(String id);
}