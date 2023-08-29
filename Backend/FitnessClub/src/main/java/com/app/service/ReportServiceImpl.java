package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Member;
import com.app.pojos.Report;
import com.app.repository.MemberRepository;
import com.app.repository.ReportRepository;

@Service
@Transactional
public class ReportServiceImpl implements IReportService {

	@Autowired
	ReportRepository repo;

	@Autowired
	MemberRepository memo;

	@Autowired
	private IMailService mail;

	@Override
	public Report registerReport(Report r, long customer_id) {
		Report ro = repo.save(r);
		Member member = memo.findById(customer_id).get();
		ro.setMember(member);
		member.setReport(ro);
		return ro;
	}

	@Override
	public Report addWorkoutOrDiet(Report r, long customer_id) {
		Member member = memo.findById(customer_id).get();
		Report ro = repo.findByCustomerId(member);
		ro.setDiet(r.getDiet());
		ro.setWeight(r.getWeight());
		ro.setWorkout(r.getWorkout());
		ro.setDiet(r.getDiet());

		mail.sendMailToMembersOfTrainer(member, member.getTrainer(), ro);
		return repo.save(ro);
	}

	@Override
	public Report getReport(long customer_id) {
		Member member = memo.findById(customer_id).get();
		Report ro = repo.findByCustomerId(member);
		return ro;
	}

}
