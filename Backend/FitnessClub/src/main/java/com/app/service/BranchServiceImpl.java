package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Batch;
import com.app.pojos.Branch;
import com.app.pojos.Manager;
import com.app.pojos.Member;
import com.app.pojos.Packages;
import com.app.pojos.Trainer;
import com.app.repository.BatchRepository;
import com.app.repository.BranchRepository;
import com.app.repository.ManagerRepository;
import com.app.repository.MemberRepository;
import com.app.repository.PackageRepository;
import com.app.repository.TrainerRepository;

@Service
@Transactional
public class BranchServiceImpl implements IBranchService {
	@Autowired
	BranchRepository brpo;

	@Autowired
	TrainerRepository tr;

	@Autowired
	MemberRepository mempo;

	@Autowired
	PackageRepository paro;

	@Autowired
	BatchRepository bapo;

	@Autowired
	ManagerRepository mano;

	@Override
	public Branch addBranch(Branch m) {
		return brpo.save(m);
	}

	@Override
	public Branch cascade(long id) {
		Branch tt = brpo.findById(id).get();

		if (tt.getManager() != null) {
			Manager m = tt.getManager();
			tt.getManager().setBranch(null);
			m = mano.save(m);
		}
		if (tt.getMembers() != null) {
			List<Member> mem = tt.getMembers();
			for (int i = 0; i < mem.size(); i++) {
				mem.get(i).setBranch(null);
			}
			mem = mempo.saveAll(mem);
		}

		if (tt.getTrainers() != null) {
			List<Trainer> tra = tt.getTrainers();
			for (int i = 0; i < tra.size(); i++) {
				tra.get(i).setBranch(null);
			}
			tra = tr.saveAll(tra);
		}

		if (tt.getBatches() != null) {
			List<Batch> batch = tt.getBatches();
			for (int i = 0; i < batch.size(); i++) {
				batch.get(i).setBranch(null);
			}
			bapo.deleteAll(batch);
		}

		if (tt.getPackages() != null) {
			List<Packages> Pack = tt.getPackages();
			for (int i = 0; i < Pack.size(); i++) {
				Pack.get(i).setBranch(null);
			}
			paro.deleteAll(Pack);
		}

		return tt;
	}

	@Override
	public Branch deleteBranch(long id) {
		Branch b = brpo.findById(id).get();
		brpo.deleteById(b.getId());
		return b;
	}

	@Override
	public List<Branch> getBranches() {
		return brpo.findAll();
	}

}
