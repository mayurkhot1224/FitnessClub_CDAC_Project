package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.app.pojos.Branch;
import com.app.pojos.Member;
import com.app.pojos.Trainer;
import com.app.pojos.User;
import com.app.repository.BranchRepository;
import com.app.repository.MemberRepository;
import com.app.repository.TrainerRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class MemberServiceImpl implements IMemberService {
	@Autowired
	BranchRepository brpo;

	@Autowired
	MemberRepository tr;

	@Autowired
	UserRepository urpo;
	@Autowired
	TrainerRepository trpo;

	@Override
	public Member registerMember(Member t, long id) {
		Member tt = tr.save(t);
		Branch bb = brpo.findById(id).orElseThrow();
		tt.setBranch(bb);
		List<Member> tlist = bb.getMembers();
		tlist.add(tt);
		bb.setMembers(tlist);
		User u = new User(tt.getEmail(), tt.getPassword(), tt.getRole());
		u = urpo.save(u);
		u.setMember(tt);
		tt.setUser(u);
		return tt;
	}

	@Override
	public Member findByUserId(User uid) {
//		User u = urpo.findById(uid.getId()).get();
		Member man = tr.findByUser(uid);
		return man;
	}

	@Override
	public Member deleteMember(long id) {
		Member m = tr.findById(id).get();
		if (m.getBranch() != null)
			m.getBranch().getMembers().remove(m);
		m.getUser().setMember(null);
		if (m.getTrainer() != null)
			m.getTrainer().getMembers().remove(m);
//		m.getReport().setMember(null);
//		m.getPayments().remove(m);
		tr.deleteById(m.getId());
		// urpo.deleteByEmail(m.getEmail());
		return m;
	}

	@Override
	public Member addTrainer(Member m1, long trainerId) {
		Trainer trainer = trpo.findById(trainerId).get();
		Member mem = tr.findById(m1.getId()).get();
		mem.setTrainer(trainer);
		trainer.getMembers().add(mem);
		Member msave = tr.save(mem);
		return msave;
	}

	@Override
	public Member registerMember(Member m) {
		m.setPassword(BCrypt.hashpw(m.getPassword(), BCrypt.gensalt()));
		Member member = tr.save(m);
		User u = new User(member.getEmail(), member.getPassword(), member.getRole());
		u = urpo.save(u);
		u.setMember(member);
		member.setUser(u);
		return member;

	}

	@Override
	public List<Member> getAllmembers() {
		return tr.findAll();
	}

	@Override
	public List<Member> getAllmembersFromTrainer(long id) {
		Trainer trai = trpo.findById(id).get();
		return tr.findByTrainer(trai);
	}

}
