package com.song.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mymusic.Mymusic;
import com.song.repository.Mymusicrepository;
import com.songlist.Song;



@RestController
@RequestMapping("/mymusic")
public class MymusicController {
	private Mymusicrepository mymusicrepository;
	public MymusicController(Mymusicrepository mymusicrepository) {
        this.mymusicrepository = mymusicrepository;
    }
	// getting all song 
	@GetMapping("/all")
    public List<Mymusic> getAll() {
        return mymusicrepository.findAll();
    }
	 //to search venue by name in mongodb database
			@RequestMapping(value = "/songs/mymusicvalue/email={email}", method = RequestMethod.GET)
			public ResponseEntity<List<Mymusic>> searchbyEmail(@PathVariable String email) {
				return ResponseEntity.ok().body(mymusicrepository.findByuserEmailLike(email));
			}
	
	
	@RequestMapping(value = "/postsong", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> create(@RequestBody Mymusic mymusic) {
		 try {
			 mymusicrepository.save(mymusic);
		  return ResponseEntity.noContent().build();
		 } catch (Exception e) {
		  return ResponseEntity.status(HttpStatus.CONFLICT).build();
		 }
		}
	@RequestMapping(value = "/updateSong", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> updateExist(@RequestBody Mymusic mymusic)  {
		 try {
			 mymusicrepository.save(mymusic);
		  return ResponseEntity.noContent().build();
		 } catch (Exception e) {
		  return ResponseEntity.notFound().build();
		 }
		}
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE,consumes = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<Void> delete(@PathVariable String id){
      try {
    	  mymusicrepository.deleteById(id);
    	  System.out.println("delete by id");
     return ResponseEntity.noContent().build();
      }
      catch (Exception e) {
    	  return ResponseEntity.notFound().build();
    	 }
    }
}
