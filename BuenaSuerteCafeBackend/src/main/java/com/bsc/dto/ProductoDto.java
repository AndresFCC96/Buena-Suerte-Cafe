package com.bsc.dto;

import java.io.Serializable;

public class ProductoDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer idProducto;
	
	private String nombre;
	
	private Integer inventario;
	
	private Integer precio;

	private String descripcion;

	private String imagen;
	
	public ProductoDto() {
		super();
	}
	
	

	public ProductoDto(Integer idProducto, String nombre, Integer inventario, Integer precio, String descripcion,
			String imagen) {
		super();
		this.idProducto = idProducto;
		this.nombre = nombre;
		this.inventario = inventario;
		this.precio = precio;
		this.descripcion = descripcion;
		this.imagen = imagen;
	}

	public Integer getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(Integer idProducto) {
		this.idProducto = idProducto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Integer getInventario() {
		return inventario;
	}

	public void setInventario(Integer inventario) {
		this.inventario = inventario;
	}

	public Integer getPrecio() {
		return precio;
	}

	public void setPrecio(Integer precio) {
		this.precio = precio;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

}
