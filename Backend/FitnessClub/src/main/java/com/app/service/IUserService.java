package com.app.service;

import com.app.pojos.User;

public interface IUserService {
	public User validate(User u);

	public String deleteUserByEmail(String email);
}
