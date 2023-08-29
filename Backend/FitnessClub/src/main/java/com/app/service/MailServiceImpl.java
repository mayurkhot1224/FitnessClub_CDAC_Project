package com.app.service;

import java.util.List;

import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.app.dto.InvoiceDto;
import com.app.pojos.Branch;
import com.app.pojos.Manager;
import com.app.pojos.Member;
import com.app.pojos.Report;
import com.app.pojos.Trainer;

@Service
@Transactional
public class MailServiceImpl implements IMailService {

	@Autowired
	private JavaMailSender javamailsender;

	@Override
	public void sendMail(Manager man) {
		try {
			MimeMessage message = javamailsender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message);
			helper.setFrom("pushpdantpatil14@gmail.com");
			helper.setTo(man.getEmail());
			String text = "Hello " + man.getFirstName() + " Welcome To FitnessClub";
			helper.setText(text);
			javamailsender.send(message);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void informUsers(List<Member> member, List<Trainer> trainer, Branch br) {
		try {
			System.out.println("Inside send mail");
			MimeMessage message = javamailsender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message);
			helper.setFrom("pushpdantpatil14@gmail.com");
			for (int i = 0; i < member.size(); i++) {
				System.out.println(member.get(i).getFirstName());
				if (member.get(i) == null)
					break;
				System.out.println("Inside send loop");
				System.out.println(member.get(i).getEmail());
				helper.setTo(member.get(i).getEmail());
				String text = "Hello " + member.get(i).getFirstName() + " Batch timing is updated";
				helper.setText(text);
				javamailsender.send(message);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void sendMailToMembersOfTrainer(Member member, Trainer trainer, Report ro) {
		try {
			System.out.println("Inside send mail");
			MimeMessage message = javamailsender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message);
			helper.setFrom("pushpdantpatil14@gmail.com");
			// helper.setTo(member.getEmail());
			helper.setTo("pushpdantpatil@gmail.com");
			String text = "Hello " + member.getFirstName() + "Your Todays Workout is " + ro.getWorkout()
					+ " And todays Diet is " + ro.getDiet();
			helper.setText(text);
			javamailsender.send(message);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void sendWelcomeMailToMembers(Member member) {
		try {
			MimeMessage message = javamailsender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message);
			helper.setFrom("pushpdantpatil14@gmail.com");
			helper.setTo(member.getEmail());
			String text = "Hello " + member.getFirstName() + member.getLastName()
					+ " Welcome To FitnessClub.Check out our exciting packages and Trainers and purchase membership to get started ";
			helper.setText(text);
			javamailsender.send(message);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void sendPayementInvoice(InvoiceDto invc) {
		try {
			MimeMessage message = javamailsender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message);
			helper.setFrom("pushpdantpatil14@gmail.com");
			helper.setTo(invc.getMember().getEmail());
			String text = "Hello " + invc.getMember().getFirstName() + " Welcome To FitnessClub "
					+ " Detailed Invoice: " + "\n" + invc.getPaymentId() + " " + invc.getAmount() + " "
					+ invc.getPaymentDate() + " " + invc.getPackages();
			helper.setText(text);
			javamailsender.send(message);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
