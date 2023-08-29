package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Branch;
import com.app.pojos.Manager;
import com.app.pojos.Member;
import com.app.pojos.Trainer;
import com.app.pojos.User;

public interface ManagerRepository extends JpaRepository<Manager, Long> {

	@Query("select m from Manager m where m.user=:id")
	Manager findByUser(@Param("id") User u);

	@Query("select m from Member m where m.branch=:id")
	List<Member> findMembersByBranchId(@Param("id") Branch b);

	@Query("select m from Trainer m where m.branch=:id")
	List<Trainer> findTrainersByBranchId(@Param("id") Branch b);

}
