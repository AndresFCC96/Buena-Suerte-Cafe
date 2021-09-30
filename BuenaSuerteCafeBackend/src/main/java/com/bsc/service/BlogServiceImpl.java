package com.bsc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.domain.Blogs;
import com.bsc.repository.BlogRepository;

@Service
public class BlogServiceImpl implements BlogService{
	
	@Autowired
	private BlogRepository blogRepository;
	
	@Override
	public List<Blogs> consultarTodosLosBlogs() throws Exception {
		List<Blogs> listBlogs = blogRepository.findAll();

		if(listBlogs.isEmpty()) {
			throw new Exception("No se encontraron blogs en el sistema.");
		}
		
		return listBlogs;
	}

}
