package com.MovieApi.restApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.MovieApi.restApi.model.Movie;
import com.MovieApi.restApi.model.MovieRepository;

@RestController
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@RequestMapping(method=RequestMethod.POST, value="movies")
	
	public void addMovie(@RequestBody Movie movie) {
		repository.save(movie);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="movies")
	public List<Movie> getMovie(){
		List It=repository.findAll();
		
		for(int i=0;i<It.size();i++) {
			System.out.println(It.get(i));
		}
	for(Movie movie : repository.findAll()) {
		System.out.println(movie.getName());
	}
	return It;
	}
	
}
