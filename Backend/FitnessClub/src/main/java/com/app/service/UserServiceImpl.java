package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.app.pojos.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	UserRepository uu;

	@Override
	public User validate(User u) {
		User valid = uu.findByEmail(u.getEmail());
		try {
			if (BCrypt.checkpw(u.getPassword(), valid.getPassword())) {
				System.out.println("User found");
				return valid;
			} else {
				valid = uu.findByEmailAndPassword(u.getEmail(), u.getPassword());
				return valid;
			}
		} catch (Exception e) {
			valid = uu.findByEmailAndPassword(u.getEmail(), u.getPassword());
			return valid;
		}
	}

	@Override
	public String deleteUserByEmail(String email) {
		uu.deleteByEmail(email);
		return null;
	}

}
