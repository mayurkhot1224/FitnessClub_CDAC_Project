package com.app.controller;

import java.util.List;

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
import com.app.pojos.Branch;
import com.app.service.IBranchService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/branch")
public class BranchController {

	@Autowired
	private IBranchService branchServ;

	@PostMapping("/add")
	public ResponseDTO<?> addBranch(@RequestBody Branch m) {
		System.out.println("Branchis " + m);
		Branch m1 = branchServ.addBranch(m);
		System.out.println(m1);
		if (m1 != null)
			return new ResponseDTO<>(HttpStatus.OK, "Branch Added ", m1);
		return new ResponseDTO<>(HttpStatus.FAILED_DEPENDENCY, "Branch not added ", m1);
	}

	@DeleteMapping("/delete/Branch/{id}")
	public ResponseDTO<?> deleteBranch(@PathVariable long id) {
		System.out.println("in delete Branch " + id);
		Branch cascadeAll = branchServ.cascade(id);
		Branch deleteBranch = branchServ.deleteBranch(cascadeAll.getId());
		return new ResponseDTO<>(HttpStatus.OK, "Branch deleted successfully", deleteBranch);
	}

	@GetMapping("/branch")
	public ResponseDTO<?> getAllBranches() {
		List<Branch> m1 = branchServ.getBranches();
		if (m1 != null)
			return new ResponseDTO<>(HttpStatus.OK, "Found Branches ", m1);
		return new ResponseDTO<>(HttpStatus.NOT_FOUND, "Do not found any branches", m1);
	}

}
