package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginResponse;
import com.app.pojos.Manager;
import com.app.pojos.Member;
import com.app.pojos.Role;
import com.app.pojos.Trainer;
import com.app.pojos.User;
import com.app.service.IManagerService;
import com.app.service.IMemberService;
import com.app.service.ITrainerService;
import com.app.service.IUserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	IUserService userserv;

	@Autowired
	private IManagerService mm;

	@Autowired
	private ITrainerService imas;
	@Autowired
	private IMemberService ms;

	public UserController() {
		System.out.println("In constructor of " + getClass());
	}

	@PostMapping("/signin")
	public LoginResponse<?> validateUser(@RequestBody User u) {
		User o = userserv.validate(u);
		try {
			if (o.getRole() == Role.ADMIN) {
				Manager man = mm.findByUserId(o);
				return new LoginResponse<>(HttpStatus.OK, "user found ", man, man.getRole());
			}
			if (o.getRole() == Role.MANAGER) {
				Manager man = mm.findByUserId(o);
				return new LoginResponse<>(HttpStatus.OK, "user found ", man, man.getRole());
			}
			if (o.getRole() == Role.TRAINER) {
				Trainer man = imas.findByUserId(o);
				return new LoginResponse<>(HttpStatus.OK, "user found ", man, man.getRole());
			}

			if (o.getRole() == Role.MEMBER) {
				Member man = ms.findByUserId(o);
				return new LoginResponse<>(HttpStatus.OK, "user found ", man, man.getRole());
			}
			return null;
		} catch (Exception e) {
			return new LoginResponse(HttpStatus.NOT_FOUND, "User not found", null, null);
		}

	}

}
