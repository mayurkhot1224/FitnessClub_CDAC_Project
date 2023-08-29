package com.app.dto;

import java.time.LocalDateTime;

import com.app.pojos.Member;

public class InvoiceDto {

	private double paymentId;
	private double amount;
	private LocalDateTime paymentDate;
	private String packages;
	private Member member;

	public InvoiceDto() {
		super();

	}

	public InvoiceDto(double paymentId, double amount, LocalDateTime paymentDate, String packages, Member member) {
		super();
		this.paymentId = paymentId;
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.packages = packages;
		this.member = member;
	}

	public InvoiceDto(double paymentId, double amount, LocalDateTime paymentDate, String packages) {
		super();
		this.paymentId = paymentId;
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.packages = packages;
	}

	public double getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(double paymentId) {
		this.paymentId = paymentId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDateTime getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDateTime paymentDate) {
		this.paymentDate = paymentDate;
	}

	public String getPackages() {
		return packages;
	}

	public void setPackages(String packages) {
		this.packages = packages;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

}
