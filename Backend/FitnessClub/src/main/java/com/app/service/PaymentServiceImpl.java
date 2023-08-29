package com.app.service;

import java.time.LocalDateTime;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.InvoiceDto;
import com.app.dto.PurchaseDto;
import com.app.pojos.Branch;
import com.app.pojos.Member;
import com.app.pojos.Packages;
import com.app.pojos.Payment;
import com.app.pojos.Trainer;
import com.app.repository.BranchRepository;
import com.app.repository.MemberRepository;
import com.app.repository.PackageRepository;
import com.app.repository.PaymentRepository;
import com.app.repository.TrainerRepository;

@Service
@Transactional
public class PaymentServiceImpl implements IPayamentService {

	@Autowired
	PaymentRepository payrepo;

	@Autowired
	MemberRepository memrepo;

	@Autowired
	PackageRepository packrepo;

	@Autowired
	BranchRepository brpo;

	@Autowired
	TrainerRepository trpo;

	@Override
	public InvoiceDto purchaseMembership(PurchaseDto purchase, long memberId) {
		Member member = memrepo.findById(memberId).get();
		Packages packages = packrepo.findById(purchase.getPackageId()).get();
		Branch br = brpo.findById(purchase.getBranchId()).get();
		Trainer tr = trpo.findById(purchase.getTrainerId()).get();

		member.setBranch(br);
		member.setTrainer(tr);

		Payment payment = new Payment(packages.getPrice(), LocalDateTime.now(), member, packages);
		payment = payrepo.save(payment);

		InvoiceDto invc = new InvoiceDto(payment.getId(), purchase.getAmount(), LocalDateTime.now(),
				packages.getPackageName(), member);
		return invc;
	}

}
