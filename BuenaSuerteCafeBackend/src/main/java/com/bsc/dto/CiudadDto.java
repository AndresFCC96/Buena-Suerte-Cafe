package com.bsc.dto;

import java.io.Serializable;
import java.sql.Date;

public class CiudadDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer cityid;
	private String citycode;
	private String description;
	private Integer departmentid;
	private String state;
	private String createdby;
	private Date creationdate;
	private String modifiedby;
	private Date modificationdate;
	public CiudadDto(Integer cityid, String citycode, String description, Integer departmentid, String state,
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
	public CiudadDto() {
		super();
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
	public Integer getDepartmentid() {
		return departmentid;
	}
	public void setDepartmentid(Integer departmentid) {
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
