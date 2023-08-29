package com.app.dto;

public class PurchaseDto {

	private long branchId;
	private long trainerId;
	private long packageId;
	private double amount;

	public PurchaseDto() {
		super();
	}

	public PurchaseDto(long branchId, long trainerId, long packageId, double amount) {
		super();
		this.branchId = branchId;
		this.trainerId = trainerId;
		this.packageId = packageId;
		this.amount = amount;
	}

	public PurchaseDto(long branchId, long trainerId, long packageId) {
		super();
		this.branchId = branchId;
		this.trainerId = trainerId;
		this.packageId = packageId;
	}

	public long getBranchId() {
		return branchId;
	}

	public void setBranchId(long branchId) {
		this.branchId = branchId;
	}

	public long getTrainerId() {
		return trainerId;
	}

	public void setTrainerId(long trainerId) {
		this.trainerId = trainerId;
	}

	public long getPackageId() {
		return packageId;
	}

	public void setPackageId(long packageId) {
		this.packageId = packageId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

}
