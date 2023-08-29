package com.app.dto;

import org.springframework.http.HttpStatus;

import com.app.pojos.Role;

public class LoginResponse<T> {
	private HttpStatus status;
	private String mesg;
	private T response;
	private Role role;

	public LoginResponse(HttpStatus status, String mesg, T response, Role role) {
		super();
		this.status = status;
		this.mesg = mesg;
		this.response = response;
		this.role = role;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	public String getMesg() {
		return mesg;
	}

	public void setMesg(String mesg) {
		this.mesg = mesg;
	}

	public T getResponse() {
		return response;
	}

	public void setResponse(T response) {
		this.response = response;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

}
