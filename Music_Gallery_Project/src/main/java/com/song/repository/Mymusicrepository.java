package com.song.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.mymusic.Mymusic;
import com.register.Register;

public interface Mymusicrepository extends MongoRepository<Mymusic, String>{
     //public void deleteOneById(String id);
	public List<Mymusic> findAllByUserEmail(String userEmail);
}
