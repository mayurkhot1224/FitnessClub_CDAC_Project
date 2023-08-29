package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Branch;
import com.app.pojos.Packages;
import com.app.repository.BranchRepository;
import com.app.repository.PackageRepository;

@Service
@Transactional
public class PackageServiceImpl implements IPackageService {

	@Autowired
	private PackageRepository bb;

	@Autowired
	private BranchRepository branch;

	@Override
	public Packages addNewPackage(Packages p) {
		return bb.save(p);
	}

	@Override
	public List<Packages> getAllPackages() {
		return bb.findAll();
	}

	@Override
	public Packages getPackageDetails(long id) {
		Packages pp = bb.findById(id).get();
		return pp;
	}

	@Override
	public String deletePackage(long id) {
		Packages pp = bb.findById(id).get();
		bb.delete(pp);
		return "Package deleted";
	}

	@Override
	public Packages updatePackage(Packages p, long id) {
		Packages up = bb.findById(id).get();
		up.setDescription(p.getDescription());
		up.setPackageName(p.getPackageName());
		up.setPrice(p.getPrice());
		return bb.save(up);
	}

	@Override
	public Packages addNewPackageToBranch(Packages p, long id) {
		Branch br = branch.findById(id).get();
		p.setBranch(br);
		return bb.save(p);
	}

	@Override
	public List<Packages> getAllPackagesOfBranch(long id) {
		Branch br = branch.findById(id).get();
		return bb.getPackagesbyBranch(br);
	}

}
