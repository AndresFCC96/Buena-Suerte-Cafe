package com.bsc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "blogs")
public class Blogs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_blog", unique = true)
	private Integer idBlog;
	
	@Column(name = "titulo")
	private String titulo;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "enlace")
	private String enlace;
	
	@Column(name = "imagen")
	private String imagen;
	

	
	/**
	 * 
	 */
	public Blogs() {
		super();
	}


	/**
	 * 
	 * @param idBlog
	 * @param titulo
	 * @param descripcion
	 * @param enlace
	 * @param imagen
	 */
	public Blogs(Integer idBlog, String titulo, String descripcion, String enlace, String imagen) {
		super();
		this.idBlog = idBlog;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.enlace = enlace;
		this.imagen = imagen;
	}



	public Integer getIdBlog() {
		return idBlog;
	}


	public void setIdBlog(Integer idBlog) {
		this.idBlog = idBlog;
	}


	public String getTitulo() {
		return titulo;
	}


	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	

	public String getEnlace() {
		return enlace;
	}


	public void setEnlace(String enlace) {
		this.enlace = enlace;
	}


	public String getImagen() {
		return imagen;
	}


	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
	
	
}
