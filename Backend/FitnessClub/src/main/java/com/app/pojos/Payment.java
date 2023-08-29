package com.app.pojos;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Payment extends BaseEntity {
	@Column(name = "amount")
	private double amount;

	@CreationTimestamp
	@Column(name = "Date")
	private LocalDateTime paymentDate;

	@ManyToOne
	@JoinColumn(name = "mmeber")
	private Member member;

	@OneToOne
	@JoinColumn(name = "package")
	private Packages packages;

	public Payment(double amount, LocalDateTime paymentDate, Member member, Packages packages) {
		super();
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.member = member;
		this.packages = packages;
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

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public Packages getPackages() {
		return packages;
	}

	public void setPackages(Packages packages) {
		this.packages = packages;
	}

}
