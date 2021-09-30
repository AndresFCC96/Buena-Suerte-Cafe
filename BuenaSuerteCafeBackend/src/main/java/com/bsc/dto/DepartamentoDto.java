package com.bsc.dto;

import java.io.Serializable;
import java.sql.Date;

public class DepartamentoDto implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer departmentid;
	private String departmentcode;
	private String description;
	private String state;
	private String createdby;
	private Date creationdate;
	private String modifiedby;
	private Date modificationdate;
	public DepartamentoDto() {
		super();
	}
	public DepartamentoDto(Integer departmentid, String departmentcode, String description, String state,
			String createdby, Date creationdate, String modifiedby, Date modificationdate) {
		super();
		this.departmentid = departmentid;
		this.departmentcode = departmentcode;
		this.description = description;
		this.state = state;
		this.createdby = createdby;
		this.creationdate = creationdate;
		this.modifiedby = modifiedby;
		this.modificationdate = modificationdate;
	}
	public Integer getDepartmentid() {
		return departmentid;
	}
	public void setDepartmentid(Integer departmentid) {
		this.departmentid = departmentid;
	}
	public String getDepartmentcode() {
		return departmentcode;
	}
	public void setDepartmentcode(String departmentcode) {
		this.departmentcode = departmentcode;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
