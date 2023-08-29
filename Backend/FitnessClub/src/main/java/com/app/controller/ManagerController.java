package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Manager;
import com.app.service.IMailService;
import com.app.service.IManagerService;
import com.app.service.IUserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/manager")
public class ManagerController {
	@Autowired
	private IManagerService memService;

	@Autowired
	private IUserService us;

	@Autowired
	private IMailService mail;

	@PostMapping("/add/{branch_id}")
	public ResponseDTO<?> addManagerWithBranchId(@RequestBody Manager m, @PathVariable long branch_id) {
		System.out.println("Manager is " + m);
		Manager manager = memService.registerManager(m, branch_id);
		System.out.println(manager);
		if (manager != null) {
			mail.sendMail(manager);
			return new ResponseDTO<>(HttpStatus.OK, "Manager Added ", manager);
		}
		throw new RuntimeException("Manager not added,Invalid parameters");
	}

	@PostMapping("/add")
	public ResponseDTO<?> addManager(@RequestBody Manager m) {
		System.out.println("Manager is " + m);
		Manager manager = memService.registerManager(m);
		System.out.println(manager);
		if (manager != null)
			return new ResponseDTO<>(HttpStatus.OK, "Manager not Added ", manager);
		return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Manager not Added ",
				new RuntimeException("Manager not added"));
	}

	@GetMapping("/managers")
	public ResponseDTO<?> getAllManagers() {
		System.out.println("in get all Managers");
		return new ResponseDTO<>(HttpStatus.OK, "Users Found ", memService.getAllManagers());
	}

	@PostMapping("/members/{id}")
	public ResponseDTO<?> getAllMembers(@PathVariable long id) {
		System.out.println("in get all Members");
		return new ResponseDTO<>(HttpStatus.OK, "Users Found ", memService.getAllMembers(id));
	}

	@PostMapping("/trainers/{id}")
	public ResponseDTO<?> getAllTrainers(@PathVariable long id) {
		System.out.println("in get all Trainers");
		return new ResponseDTO<>(HttpStatus.OK, "Users Found ", memService.getAllTrainers(id));
	}

	@DeleteMapping("/delete/manager/{id}")
	public ResponseDTO<?> deleteUser(@PathVariable long id) {
		System.out.println("in delete user " + id);
		Manager deleteUser = memService.deleteManager(id);
		String user = us.deleteUserByEmail(deleteUser.getEmail());
		return new ResponseDTO<>(HttpStatus.OK, "User deleted successfully", deleteUser);
	}

	@PutMapping("/update/manager/{id}")
	public ResponseDTO<?> addBranch(@RequestBody Manager manager, @PathVariable long id) {
		Manager updateUser = memService.addBranch(manager, id);
		return new ResponseDTO<>(HttpStatus.OK, "User deleted successfully", updateUser);
	}

}
