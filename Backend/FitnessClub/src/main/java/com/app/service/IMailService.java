package com.app.service;

import java.util.List;

import com.app.dto.InvoiceDto;
import com.app.pojos.Branch;
import com.app.pojos.Manager;
import com.app.pojos.Member;
import com.app.pojos.Report;
import com.app.pojos.Trainer;

public interface IMailService {

	void sendMail(Manager man);

	void informUsers(List<Member> member, List<Trainer> trainer, Branch br);

	void sendMailToMembersOfTrainer(Member member, Trainer trainer, Report ro);

	void sendWelcomeMailToMembers(Member member);

	void sendPayementInvoice(InvoiceDto invc);

}
