package com.bsc.dto;

import java.io.Serializable;
import java.sql.Date;


public class UsuarioDto implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Integer userID;
	
	private String firstName;
	
	private String lastname;
	
	private String email;
	
	private String documentype;
	
	private String documentnumber;
	
	private Integer phone;
	
	private String address;
	
	private String gender;
	
	private String password;
	
	private String role;
	
	private Integer cityid;
	
	private String state;
	
	private String createdby;
	
	private Date creationdate;
	
	private String modifiedby;
	
	private Date modificationdate;

	public UsuarioDto(Integer userID, String firstName, String lastname, String email, String documentype,
			String documentnumber, Integer phone, String address, String gender, String password, String role,
			Integer cityid, String state, String createdby, Date creationdate, String modifiedby,
			Date modificationdate) {
		super();
		this.userID = userID;
		this.firstName = firstName;
		this.lastname = lastname;
		this.email = email;
		this.documentype = documentype;
		this.documentnumber = documentnumber;
		this.phone = phone;
		this.address = address;
		this.gender = gender;
		this.password = password;
		this.role = role;
		this.cityid = cityid;
		this.state = state;
		this.createdby = createdby;
		this.creationdate = creationdate;
		this.modifiedby = modifiedby;
		this.modificationdate = modificationdate;
	}

	public UsuarioDto() {
		super();
	}

	public Integer getUserID() {
		return userID;
	}

	public void setUserID(Integer userID) {
		this.userID = userID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDocumentype() {
		return documentype;
	}

	public void setDocumentype(String documentype) {
		this.documentype = documentype;
	}

	public String getDocumentnumber() {
		return documentnumber;
	}

	public void setDocumentnumber(String documentnumber) {
		this.documentnumber = documentnumber;
	}

	public Integer getPhone() {
		return phone;
	}

	public void setPhone(Integer phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Integer getCityid() {
		return cityid;
	}

	public void setCityid(Integer cityid) {
		this.cityid = cityid;
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
