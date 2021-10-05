package com.bsc.dto;

public class BlogsDto {
	
	private Integer idBlog;
	private String titulo;
	private String descripcion;
	private String enlace;
	private String imagen;
	
	/**
	 * 
	 */
	public BlogsDto() {
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
	public BlogsDto(Integer idBlog, String titulo, String descripcion, String enlace, String imagen) {
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
