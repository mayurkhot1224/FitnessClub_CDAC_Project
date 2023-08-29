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
public class TrainerServiceImpl implements ITrainerService {

	@Autowired
	BranchRepository brpo;

	@Autowired
	TrainerRepository tr;

	@Autowired
	UserRepository urpo;

	@Autowired
	MemberRepository mrpo;

	@Override
	public Trainer registerTrainer(Trainer t, long id) {
		t.setPassword(BCrypt.hashpw(t.getPassword(), BCrypt.gensalt()));
		Trainer tt = tr.save(t);
		Branch bb = brpo.findById(id).orElseThrow();
		tt.setBranch(bb);
		List<Trainer> tlist = bb.getTrainers();
		tlist.add(tt);
		bb.setTrainers(tlist);
		User u = new User(tt.getEmail(), tt.getPassword(), tt.getRole());
		u = urpo.save(u);
		u.setTrainer(tt);
		tt.setUser(u);
		return tt;
	}

	@Override
	public Trainer findByUserId(User uid) {
//		User u = urpo.findById(uid.getId()).get();
		Trainer man = tr.findByUser(uid);
		return man;
	}

	@Override
	public Trainer deleteTrainer(long id) {
		Trainer m = tr.findById(id).get();
		m.getBranch().getTrainers().remove(m);
		m.getUser().setTrainer(null);
//		if(m.getTrainer()!=null)
//		m.getTrainer().getMembers().remove(m);
		tr.deleteById(m.getId());
		// urpo.deleteByEmail(m.getEmail());
		return m;
	}

	@Override
	public Trainer setMembersNull(long id) {
		Trainer tt = tr.findById(id).get();
		List<Member> mem = tt.getMembers();
		for (int i = 0; i < mem.size(); i++) {
			mem.get(i).setTrainer(null);
		}
		mem = mrpo.saveAll(mem);
		return tt;
	}

	@Override
	public List<Trainer> getAlltrainers() {
		return tr.findAll();
	}

	@Override
	public List<Trainer> getAlltrainers(long branchId) {
		Branch br = brpo.findById(branchId).get();
		return tr.findByBranch(br);
	}

}
