package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Branch extends BaseEntity {

	public Branch(String branchName, String locality, String city, String state, String zipCode, double phoneNo) {
		super();
		this.branchName = branchName;
		this.locality = locality;
		this.city = city;
		State = state;
		this.zipCode = zipCode;
		this.phoneNo = phoneNo;
	}

	public Branch() {
		super();
	}

	@Column(name = "branch_name", nullable = false)
	private String branchName;

	@Column(name = "locality")
	private String locality;

	@Column(name = "city")
	private String city;

	@Column(name = "state")
	private String State;

	@Column(name = "zip_code")
	private String zipCode;

	@Column(name = "phone_no")
	private double phoneNo;

	@OneToOne(mappedBy = "branch", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private Manager manager;

	@JsonIgnore
	@OneToMany(mappedBy = "branch", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Trainer> trainers = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "branch", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Member> members = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "branch", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<Batch> batches = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "branch", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Packages> packages = new ArrayList<>();

	public Branch(String branchName, String locality, String city, String state, String zipCode, double phoneNo,
			Manager manager) {
		super();
		this.branchName = branchName;
		this.locality = locality;
		this.city = city;
		State = state;
		this.zipCode = zipCode;
		this.phoneNo = phoneNo;
		this.manager = manager;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public double getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(double phoneNo) {
		this.phoneNo = phoneNo;
	}

	public Manager getManager() {
		return manager;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}

	public List<Trainer> getTrainers() {
		return trainers;
	}

	public void setTrainers(List<Trainer> trainers) {
		this.trainers = trainers;
	}

	public List<Member> getMembers() {
		return members;
	}

	public void setMembers(List<Member> members) {
		this.members = members;
	}

	public List<Batch> getBatches() {
		return batches;
	}

	public void setBatches(List<Batch> batches) {
		this.batches = batches;
	}

	public List<Packages> getPackages() {
		return packages;
	}

	public void setPackages(List<Packages> packages) {
		this.packages = packages;
	}

	public void removeMember(Member p) {
		// parent ----X---> child
		members.remove(p);
		// child ----X----> parent
		p.setBranch(null);
	}

}
