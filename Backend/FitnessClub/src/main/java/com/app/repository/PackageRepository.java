package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Branch;
import com.app.pojos.Packages;

public interface PackageRepository extends JpaRepository<Packages, Long> {

	@Query("select b from Packages b where b.branch=:id ")
	List<Packages> getPackagesbyBranch(@Param("id") Branch b);

}
