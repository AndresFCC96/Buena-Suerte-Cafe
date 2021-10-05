package com.bsc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bsc.domain.Producto;
import com.bsc.dto.ProductoDto;



@Service
public interface ProductoService {
	
	public Producto consultarProductoPorId(Integer idPro) throws Exception;
	
	public List<Producto> consultarTodosLosProductos() throws Exception;
	
	public Producto validarProducto(ProductoDto productoDTO) throws Exception;
	
	public Producto guardarProducto(ProductoDto productoDTO) throws Exception;
	
	public Producto actualizarProducto(ProductoDto productoDTO) throws Exception;
	
	public void eliminarProducto(Integer id) throws Exception;
}
