package com.bsc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bsc.service.BlogService;

@CrossOrigin()
@RestController
@RequestMapping("/api/blog")
public class BlogsRestController {

	@Autowired
	private BlogService blogService;
	
	@GetMapping("/consultarProductos")
	public ResponseEntity<?> consultarBlogs(){
		
		try {
			return ResponseEntity.ok().body(blogService.consultarTodosLosBlogs());
		}catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
}
