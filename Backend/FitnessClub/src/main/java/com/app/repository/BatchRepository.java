package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Batch;
import com.app.pojos.Branch;

public interface BatchRepository extends JpaRepository<Batch, Long> {

	@Query("select b from Batch b where b.branch=:id ")
	List<Batch> findByBranch(@Param("id") Branch b);

}
