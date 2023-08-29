package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Branch;
import com.app.pojos.Member;
import com.app.pojos.Trainer;
import com.app.pojos.User;

public interface MemberRepository extends JpaRepository<Member, Long> {
	@Query("select t from Member t where t.user=:id")
	Member findByUser(@Param("id") User u);

	@Query("delete from Member m where m.id=:id")
	void deleteMember(@Param("id") Long id);

	List<Member> findByBranch(Branch branch);

	List<Member> findByTrainer(Trainer trai);

}
