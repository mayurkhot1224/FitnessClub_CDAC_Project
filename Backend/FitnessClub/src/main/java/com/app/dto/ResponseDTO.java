package com.app.dto;

import org.springframework.http.HttpStatus;

public class ResponseDTO<T> {

	private HttpStatus status;
	private String mesg;
	private T response;

	public ResponseDTO(HttpStatus status, String mesg, T response) {
		super();
		this.status = status;
		this.mesg = mesg;
		this.response = response;
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

}
