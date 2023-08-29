package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Report;
import com.app.service.IReportService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/report")
public class ReportController {
	@Autowired
	private IReportService reps;

	@PostMapping("/add/{customer_id}")
	public ResponseDTO<?> addReport(@RequestBody Report r, @PathVariable long customer_id) {
		System.out.println("Report is " + r);
		Report m1 = reps.registerReport(r, customer_id);
		System.out.println(m1);
		if (m1 != null)
			return new ResponseDTO<>(HttpStatus.OK, "Report added successfully", m1);
		return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Report not added", null);
	}

	@GetMapping("/get/{customer_id}")
	public ResponseDTO<?> getReport(@PathVariable long customer_id) {
		Report r1 = reps.getReport(customer_id);
		if (r1 != null)
			return new ResponseDTO<>(HttpStatus.OK, "Report sent", r1);
		return new ResponseDTO<>(HttpStatus.NOT_FOUND, "Report not found ", null);
	}

	@PutMapping("/update/{customer_id}")
	public ResponseDTO<?> updateReport(@RequestBody Report r, @PathVariable long customer_id) {
		System.out.println("Report is " + r);
		Report r1 = reps.addWorkoutOrDiet(r, customer_id);
		if (r1 != null)
			return new ResponseDTO<>(HttpStatus.OK, "Report updated successfully", r1);
		return new ResponseDTO<>(HttpStatus.NOT_MODIFIED, "Report not updated ", null);
	}

}
