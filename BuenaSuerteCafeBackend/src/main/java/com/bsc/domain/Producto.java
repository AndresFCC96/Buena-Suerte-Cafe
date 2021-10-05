package com.bsc.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "producto")
public class Producto implements Serializable{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6961683673785004247L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_producto", unique = true)
	private Integer idProducto;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "inventario")
	private Integer inventario;
	
	@Column(name = "precio")
	private Integer precio;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "imagen", length = 500000)
	private String imagen;
	
	public Producto() {
		super();
	}
	
	

	public Producto(Integer idProducto, String nombre, Integer inventario, Integer precio, String descripcion,
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
