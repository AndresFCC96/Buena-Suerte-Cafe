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
@Table(name = "city")
public class Ciudad implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cityid")
	private Integer cityid;
	
	@Column(name = "citycode")
	private String citycode;
	
	@Column(name = "description")
	private String description;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "departmentid", nullable = false)
	@JsonIgnoreProperties({"hibernateInitializer", "handler"})
	private Departamento departmentid;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "createdby")
	private String createdby;
	
	@Column(name = "creationdate")
	private Date creationdate;
	
	@Column(name = "modifiedby")
	private String modifiedby;
	
	@Column(name = "modificationdate")
	private Date modificationdate;

	public Ciudad() {
		super();
	}

	public Ciudad(Integer cityid, String citycode, String description, Departamento departmentid, String state,
			String createdby, Date creationdate, String modifiedby, Date modificationdate) {
		super();
		this.cityid = cityid;
		this.citycode = citycode;
		this.description = description;
		this.departmentid = departmentid;
		this.state = state;
		this.createdby = createdby;
		this.creationdate = creationdate;
		this.modifiedby = modifiedby;
		this.modificationdate = modificationdate;
	}

	public Integer getCityid() {
		return cityid;
	}

	public void setCityid(Integer cityid) {
		this.cityid = cityid;
	}

	public String getCitycode() {
		return citycode;
	}

	public void setCitycode(String citycode) {
		this.citycode = citycode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Departamento getDepartmentid() {
		return departmentid;
	}

	public void setDepartmentid(Departamento departmentid) {
		this.departmentid = departmentid;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCreatedby() {
		return createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public Date getCreationdate() {
		return creationdate;
	}

	public void setCreationdate(Date creationdate) {
		this.creationdate = creationdate;
	}

	public String getModifiedby() {
		return modifiedby;
	}

	public void setModifiedby(String modifiedby) {
		this.modifiedby = modifiedby;
	}

	public Date getModificationdate() {
		return modificationdate;
	}

	public void setModificationdate(Date modificationdate) {
		this.modificationdate = modificationdate;
	}
	
	
}
