package com.app.service;

import java.util.List;

import com.app.pojos.Packages;

public interface IPackageService {

	Packages addNewPackage(Packages p);

	List<Packages> getAllPackages();

	Packages getPackageDetails(long id);

	String deletePackage(long id);

	Packages updatePackage(Packages p, long id);

	Packages addNewPackageToBranch(Packages p, long id);

	List<Packages> getAllPackagesOfBranch(long id);

}
