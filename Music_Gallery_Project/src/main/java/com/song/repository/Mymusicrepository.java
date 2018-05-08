package com.song.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.mymusic.Mymusic;
import com.register.Register;
import com.songlist.Song;

public interface Mymusicrepository extends MongoRepository<Mymusic, String>{
     //public void deleteOneById(String id);
	//public List<Mymusic> findAllByUserEmail(String userEmail);
  
	public List<Mymusic> findByuserEmailLike(String name);
	
   //public List<Mymusic> finduserEmailLike(String userId);
}
