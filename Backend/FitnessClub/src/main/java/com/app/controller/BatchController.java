package com.app.controller;

import java.util.List;

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
import com.app.pojos.Batch;
import com.app.service.IBatchService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/batches")
public class BatchController {

	@Autowired
	private IBatchService batchService;

	public BatchController() {
		// TODO Auto-generated constructor stub
		System.out.println("In constructor of " + getClass());
	}

	@GetMapping("/batch")
	public ResponseDTO<?> getAllBatches() {
		System.out.println("in get all batches");
		return new ResponseDTO<>(HttpStatus.OK, "Batches Found ", batchService.getAllBatches());
	}

	@PostMapping("/add/{branchBranchId}")
	public ResponseDTO<?> addBatch(@RequestBody Batch batch, @PathVariable long branchBranchId) {
		System.out.println("In add batch " + batch + " batchBranchId " + branchBranchId);
		Batch b = batchService.addNewBatch(batch, branchBranchId);
		return new ResponseDTO<>(HttpStatus.OK, "Batch added successfully", b);
	}

	@PutMapping("/update/{id}")
	public ResponseDTO<?> updateBatch(@RequestBody Batch batch, @PathVariable long id) {
		System.out.println("in update batch " + batch + " id " + id);
		Batch b = batchService.updateBatch(batch, id);

		return new ResponseDTO<>(HttpStatus.OK, "Batch updated successfully", b);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseDTO<?> deleteBatch(@PathVariable long id) {
		System.out.println("in delete batch " + id);
		String b = batchService.deleteBatch(id);
		return new ResponseDTO<>(HttpStatus.OK, "Batch deleted successfully", b);
	}

	@GetMapping("/batchesbyid/{id}")
	public ResponseDTO<?> getBatchesByBranchId(@PathVariable long id) {
		System.out.println("In get Batches by branch id " + id);
		List<Batch> batches = batchService.getBatchesByBranchId(id);
		return new ResponseDTO<>(HttpStatus.OK, "All users of the branch id " + id, batches);

	}

}
