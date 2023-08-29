package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Branch;
import com.app.pojos.Trainer;
import com.app.pojos.User;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {

	@Query("select t from Trainer t where t.user=:id")
	Trainer findByUser(@Param("id") User u);

	List<Trainer> findByBranch(Branch br);
}
