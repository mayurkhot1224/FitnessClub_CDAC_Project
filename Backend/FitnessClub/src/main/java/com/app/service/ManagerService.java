package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.app.pojos.Branch;
import com.app.pojos.Manager;
import com.app.pojos.Member;
import com.app.pojos.Trainer;
import com.app.pojos.User;
import com.app.repository.BranchRepository;
import com.app.repository.ManagerRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class ManagerService implements IManagerService {
	@Autowired
	ManagerRepository mr;

	@Autowired
	BranchRepository brpo;

	@Autowired
	UserRepository urpo;

	@Override
	public Manager registerManager(Manager m, long id) {
		m.setPassword(BCrypt.hashpw(m.getPassword(), BCrypt.gensalt()));
		Manager mm = mr.save(m);
		Branch bb = brpo.findById(id).orElseThrow();
		mm.setBranch(bb);
		bb.setManager(mm);
		User u = new User(mm.getEmail(), mm.getPassword(), mm.getRole());
		u = urpo.save(u);
		u.setManager(mm);
		mm.setUser(u);
		return mm;
	}

	@Override
	public Manager findByUserId(User uid) {
//		User u = urpo.findById(uid.getId()).get();
		Manager man = mr.findByUser(uid);
		return man;
	}

	@Override
	public List<Member> getAllMembers(long id) {
		Branch b = brpo.findById(id).get();
		List<Member> mem = mr.findMembersByBranchId(b);
		return mem;
	}

	@Override
	public List<Trainer> getAllTrainers(long id) {
		Branch b = brpo.findById(id).get();
		List<Trainer> mem = mr.findTrainersByBranchId(b);
		return mem;
	}

	@Override
	public Manager deleteManager(long id) {
		Manager m = mr.findById(id).get();
		m.getBranch().setManager(null);
		m.getUser().setManager(null);
		mr.deleteById(m.getId());
		return m;
	}

	@Override
	public Manager registerManager(Manager m) {
		m.setPassword(BCrypt.hashpw(m.getPassword(), BCrypt.gensalt()));
		Manager mm = mr.save(m);
		User u = new User(mm.getEmail(), mm.getPassword(), mm.getRole());
		u = urpo.save(u);
		u.setManager(mm);
		mm.setUser(u);
		return mm;
	}

	@Override
	public Manager addBranch(Manager manager, long id) {
		Manager man = mr.findById(manager.getId()).get();
		Branch bb = brpo.findById(id).orElseThrow();
		man.setBranch(bb);
		return mr.save(man);
	}

	@Override
	public List<Manager> getAllManagers() {
		return mr.findAll();
	}

}
