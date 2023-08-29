package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Member;
import com.app.pojos.Report;

public interface ReportRepository extends JpaRepository<Report, Long> {

	@Query("select r from Report r where r.member=:id ")
	Report findByCustomerId(@Param("id") Member member);

}
