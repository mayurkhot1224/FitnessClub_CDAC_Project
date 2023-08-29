package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.InvoiceDto;
import com.app.dto.PurchaseDto;
import com.app.dto.ResponseDTO;
import com.app.service.IMailService;
import com.app.service.IPayamentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	private IPayamentService payment;

	@Autowired
	private IMailService mail;

	@PostMapping("/add/{memberId}")
	public ResponseDTO<?> makePayment(@RequestBody PurchaseDto purchase, @PathVariable long memberId) {
		InvoiceDto invc = payment.purchaseMembership(purchase, memberId);
		mail.sendPayementInvoice(invc);
		return new ResponseDTO<>(HttpStatus.OK, "Payment Done ", invc);
	}

}
