package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Trainer;
import com.app.service.ITrainerService;
import com.app.service.IUserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/trainer")
public class TrainerController {

	@Autowired
	private ITrainerService trainer;

	@Autowired
	private IUserService us;

	@PostMapping("/add/{branch_id}")
	public ResponseDTO<?> addTrainer(@RequestBody Trainer m, @PathVariable long branch_id) {
		System.out.println("Trainer is " + m);
		Trainer trainers = trainer.registerTrainer(m, branch_id);
		System.out.println(trainers);
		if (trainers != null)
			return new ResponseDTO<>(HttpStatus.OK, "Trainer Added ", trainers);
		return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Trainer not Added ",
				new RuntimeException("Trainer not added"));
	}

	@DeleteMapping("/delete/trainer/{id}")
	public ResponseDTO<?> deleteUser(@PathVariable long id) {
		System.out.println("in delete user " + id);
		Trainer nullMember = trainer.setMembersNull(id);
		Trainer deleteUser = trainer.deleteTrainer(nullMember.getId());
		String user = us.deleteUserByEmail(deleteUser.getEmail());
		return new ResponseDTO<>(HttpStatus.OK, "User deleted successfully", deleteUser);
	}

	@GetMapping("/trainers")
	public ResponseDTO<?> getAlltrainers() {
		System.out.println("in get all trainers");
		return new ResponseDTO<>(HttpStatus.OK, "Users Found ", trainer.getAlltrainers());
	}

	@GetMapping("/trainers/{branchId}")
	public ResponseDTO<?> getAlltrainersFromBranch(@PathVariable long branchId) {
		System.out.println("in get all trainers of branch");
		return new ResponseDTO<>(HttpStatus.OK, "Users Found ", trainer.getAlltrainers(branchId));
	}
}
