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
import com.app.pojos.Packages;
import com.app.service.IPackageService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/packages")
public class PackageController {
	@Autowired
	private IPackageService packageService;

	public PackageController() {

		System.out.println("In constructor of " + getClass());
	}

	@GetMapping("/package")
	public ResponseDTO<?> getAllPackages() {
		System.out.println("In get all packages ");
		return new ResponseDTO<>(HttpStatus.OK, "Packages Found", packageService.getAllPackages());
	}

	@PostMapping("/add")
	public ResponseDTO<?> addPackage(@RequestBody Packages p) {
		System.out.println("In add package " + p);
		Packages pp = packageService.addNewPackage(p);
		return new ResponseDTO<>(HttpStatus.OK, "Package added Successfully", pp);
	}

	@GetMapping("/package/{id}")
	public ResponseDTO<?> getPackage(@PathVariable long id) {
		System.out.println("in get package");
		return new ResponseDTO<>(HttpStatus.OK, "Package details", packageService.getPackageDetails(id));
	}

	@PutMapping("/update/{id}")
	public ResponseDTO<?> updatePackage(@RequestBody Packages p, @PathVariable long id) {
		System.out.println("in update package" + p + " id " + id);
		Packages pp = packageService.updatePackage(p, id);
		return new ResponseDTO<>(HttpStatus.OK, "package updated successfully", pp);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseDTO<?> deletePackage(@PathVariable long id) {
		System.out.println("In delete package");
		String deletePackage = packageService.deletePackage(id);
		return new ResponseDTO<>(HttpStatus.OK, "package deleted successfully", deletePackage);
	}

	@PostMapping("/add/{id}")
	public ResponseDTO<?> addPackageToBranch(@RequestBody Packages p, @PathVariable long id) {
		System.out.println("In add package " + p);
		Packages pp = packageService.addNewPackageToBranch(p, id);
		return new ResponseDTO<>(HttpStatus.OK, "Package added Successfully", pp);
	}

	@GetMapping("/branch/{id}")
	public ResponseDTO<?> getAllPackagesOfBranch(@PathVariable long id) {
		System.out.println("In get all packages ");
		return new ResponseDTO<>(HttpStatus.OK, "Packages Found", packageService.getAllPackagesOfBranch(id));
	}

}
