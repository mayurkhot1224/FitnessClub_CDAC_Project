package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Report extends BaseEntity {
	private double height;

	private double weight;

	@Column(name = "todays_workout", length = 1000)
	private String workout;

	@Column(length = 1000)
	private String diet;

	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "member_id")
	private Member member;

	public Report() {
		super();
	}

	public Report(double height, double weight, String workout, String diet, Member member) {
		super();
		this.height = height;
		this.weight = weight;
		this.workout = workout;
		this.diet = diet;
		this.member = member;
	}

	public Report(double height, double weight, String workout, String diet) {
		super();
		this.height = height;
		this.weight = weight;
		this.workout = workout;
		this.diet = diet;
	}

	public Report(String workout, String diet) {
		super();
		this.workout = workout;
		this.diet = diet;
	}

	public Report(double height, double weight) {
		super();
		this.height = height;
		this.weight = weight;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public String getWorkout() {
		return workout;
	}

	public void setWorkout(String workout) {
		this.workout = workout;
	}

	public String getDiet() {
		return diet;
	}

	public void setDiet(String diet) {
		this.diet = diet;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

}
