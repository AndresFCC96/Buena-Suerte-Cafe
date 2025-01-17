package com.bsc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bsc.domain.Blogs;
import com.bsc.domain.Producto;

@Service
public interface BlogService {
	
	public Blogs consultarBlogPorId(Integer idBlog) throws Exception;
	
	public List<Blogs> consultarTodosLosBlogs() throws Exception;
}
