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
@Table(name = "webuser")
public class Usuario implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userid", unique = true)
	private Integer userid;
	
	@Column(name = "firstname")
	private String firstName;
	
	@Column(name = "lastname")
	private String lastname;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "documenttype")
	private String documentype;
	
	@Column(name="documentnumber")
	private String documentnumber;
	
	@Column(name = "phone")
	private Integer phone;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "role")
	private String role;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cityid", nullable = false)
	@JsonIgnoreProperties({"hibernateInitializer", "handler"})
	private Ciudad cityid;
	
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

	public Usuario() {
		super();
	}

	public Usuario(Integer userID, String firstName, String lastname, String email, String documentype,
			String documentnumber, Integer phone, String address, String gender, String password, String role,
			Ciudad cityid, String state, String createdby, Date creationdate, String modifiedby,
			Date modificationdate) {
		super();
		this.userid = userID;
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

	public Integer getUserID() {
		return userid;
	}

	public void setUserID(Integer userID) {
		this.userid = userID;
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

	public Ciudad getCityid() {
		return cityid;
	}

	public void setCityid(Ciudad cityid) {
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
