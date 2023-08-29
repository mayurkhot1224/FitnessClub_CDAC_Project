package com.app.pojos;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Batch extends BaseEntity {

	@Column(name = "batch_type", length = 20)
	private String batchType;

	@Column(name = "batch_time", length = 20)
	private LocalTime batchTime;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "branch")
	private Branch branch;

	public Batch() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Batch(String batchType, LocalTime batchTime, Branch branch) {
		super();
		this.batchType = batchType;
		this.batchTime = batchTime;
		this.branch = branch;
	}

	public Batch(String batchType, LocalTime batchTime) {
		super();
		this.batchType = batchType;
		this.batchTime = batchTime;
	}

	public String getBatchType() {
		return batchType;
	}

	public void setBatchType(String batchType) {
		this.batchType = batchType;
	}

	public LocalTime getBatchTime() {
		return batchTime;
	}

	public void setBatchTime(LocalTime batchTime) {
		this.batchTime = batchTime;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

}
