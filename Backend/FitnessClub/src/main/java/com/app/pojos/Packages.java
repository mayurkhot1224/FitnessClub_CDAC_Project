package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Packages extends BaseEntity {
	@Column(name = "package_name", length = 20)
	private String packageName;

	@Column(name = "package_price", length = 20)
	private double price;

	@Column(name = "description", length = 100)
	private String description;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "branch")
	private Branch branch;

	public Packages() {
		super();

	}

	public Packages(String packageName, double price, String description, Branch branch) {
		super();
		this.packageName = packageName;
		this.price = price;
		this.description = description;
		this.branch = branch;
	}

	public Packages(String packageName, double price, String description) {
		super();
		this.packageName = packageName;
		this.price = price;
		this.description = description;
	}

	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

}
