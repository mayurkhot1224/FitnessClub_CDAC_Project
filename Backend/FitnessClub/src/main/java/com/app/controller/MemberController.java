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
import com.app.pojos.Member;
import com.app.service.IMailService;
import com.app.service.IMemberService;
import com.app.service.IUserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired
	private IMemberService memService;

	@Autowired
	private IUserService us;
	@Autowired
	private IMailService mail;

	@PostMapping("/add/{branch_id}")
	public ResponseDTO<?> addMemberToBranch(@RequestBody Member m, @PathVariable long branch_id) {
		System.out.println("Member is " + m);
		Member member = memService.registerMember(m, branch_id);
		System.out.println(member);
		if (member != null) {
			mail.sendWelcomeMailToMembers(member);
			return new ResponseDTO<>(HttpStatus.OK, "Member Added ", member);
		}
		return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Member not Added ",
				new RuntimeException("Member not added"));
	}

	@PostMapping("/add")
	public ResponseDTO<?> addMember(@RequestBody Member m) {
		System.out.println("Member is " + m);
		Member member = memService.registerMember(m);
		System.out.println(member);
		if (member != null) {
			mail.sendWelcomeMailToMembers(member);
			return new ResponseDTO<>(HttpStatus.OK, "Member Added ", member);
		}
		return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Member not Added ",
				new RuntimeException("Member not added"));
	}

	@DeleteMapping("/delete/member/{id}")
	public ResponseDTO<?> deleteUser(@PathVariable long id) {
		System.out.println("in delete user " + id);
		Member deleteUser = memService.deleteMember(id);
		String user = us.deleteUserByEmail(deleteUser.getEmail());
		return new ResponseDTO<>(HttpStatus.OK, "User deleted successfully", deleteUser);
	}

	@PutMapping("add/trainer/{trainerId}")
	public ResponseDTO<?> addTrainer(@RequestBody Member m, @PathVariable long trainerId) {
		Member mem = memService.addTrainer(m, trainerId);
		return new ResponseDTO<>(HttpStatus.OK, "Trainer updated successfully", mem);
	}

	@GetMapping("/members")
	public ResponseDTO<?> getAllMembers() {
		System.out.println("in get all members");
		return new ResponseDTO<>(HttpStatus.OK, "Users Found ", memService.getAllmembers());
	}

	@GetMapping("/trainmembers/{id}")
	public ResponseDTO<?> getAllMembersFromSameTrainer(@PathVariable long id) {
		System.out.println("in get all members");
		return new ResponseDTO<>(HttpStatus.OK, "Users Found ", memService.getAllmembersFromTrainer(id));
	}

}
