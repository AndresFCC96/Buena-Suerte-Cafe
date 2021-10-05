package com.bsc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.domain.Blogs;
import com.bsc.domain.Producto;
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

	@Override
	public Blogs consultarBlogPorId(Integer idBlog) throws Exception {
		Optional<Blogs> blog = blogRepository.findById(idBlog);
		
		if(blog.isPresent()) {
			return blog.get();
		}else {
			throw new Exception("El blog al que intenta acceder no existe.");
		}
	}

}
