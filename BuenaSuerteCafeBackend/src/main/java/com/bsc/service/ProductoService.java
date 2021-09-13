package com.bsc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bsc.domain.Producto;



@Service
public interface ProductoService {
	public List<Producto> consultarTodosLosProductos() throws Exception;
}
