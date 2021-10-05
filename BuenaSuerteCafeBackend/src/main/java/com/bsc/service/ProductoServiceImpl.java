package com.bsc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.domain.Producto;
import com.bsc.dto.ProductoDto;
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

	@Override
	public Producto consultarProductoPorId(Integer idPro) throws Exception {
		Optional<Producto> producto = productoRepository.findById(idPro);
		
		if(producto.isPresent()) {
			return producto.get();
		}else {
			throw new Exception("El producto al que intenta acceder no existe.");
		}
	}

	@Override
	public Producto guardarProducto(ProductoDto productoDTO) throws Exception {

		Producto producto = new Producto();
		
		try {
			producto = validarProducto(productoDTO);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		return productoRepository.save(producto);
	}

	@Override
	public Producto actualizarProducto(ProductoDto productoDTO) throws Exception {

		Producto producto = new Producto();
		
		System.out.println("El id es" + producto.getIdProducto());
		
		if(productoDTO.getIdProducto() == null || productoDTO.getIdProducto() == 0) {
			throw new Exception("El id del producto no puede estar vacio o ser cero");
		}
		
		
		

		producto = validarProducto(productoDTO);
		
		producto.setIdProducto(productoDTO.getIdProducto());
		
		
		return productoRepository.saveAndFlush(producto);
	}

	@Override
	public Producto validarProducto(ProductoDto productoDTO) throws Exception {

		if(productoDTO == null) {
			throw new Exception("El producto no puede estar vacio");
		}
		

		
		if (productoDTO.getNombre().equals("") || productoDTO.getNombre().trim().equals("")) {
			throw new Exception("El nombre del producto no puede estar vacio");
		}
		
		if(productoDTO.getPrecio() == null || productoDTO.getPrecio() == 0) {
			throw new Exception("El precio del producto no puede estar vacio o ser cero");
		}
		
		if(productoDTO.getInventario() == null || productoDTO.getInventario() == 0) {
			throw new Exception("El inventario del producto no puede estar vacio o ser cero");
		}
		
		Producto producto = new Producto();
		
		producto.setNombre(productoDTO.getNombre());
		producto.setPrecio(productoDTO.getPrecio());
		producto.setInventario(productoDTO.getInventario());
		producto.setDescripcion(productoDTO.getDescripcion());
		producto.setImagen(productoDTO.getImagen());
		
		return producto;
		
	}

	@Override
	public void eliminarProducto(Integer id) throws Exception {
		
		Producto producto = new Producto();
		
		if(id == null) {
			throw new Exception("El id no puede ser nulo o estar vacio");
		}
		
		try {
			producto = consultarProductoPorId(id);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		productoRepository.delete(producto);
	}

}
