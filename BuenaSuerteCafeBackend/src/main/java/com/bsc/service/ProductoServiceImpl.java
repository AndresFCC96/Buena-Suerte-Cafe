package com.bsc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.domain.Producto;
import com.bsc.repository.ProductoRepository;

@Service
public class ProductoServiceImpl implements ProductoService{
	
	@Autowired
	private ProductoRepository productoRepository;
	
	@Override
	public List<Producto> consultarTodosLosProductos() throws Exception {
		List<Producto> listProducto = productoRepository.findAll();

		if(listProducto.isEmpty()) {
			throw new Exception("No se encontraron clientes en el sistema.");
		}
		
		return listProducto;
	}

}
