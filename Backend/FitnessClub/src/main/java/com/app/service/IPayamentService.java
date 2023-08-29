package com.app.service;

import com.app.dto.InvoiceDto;
import com.app.dto.PurchaseDto;

public interface IPayamentService {

	InvoiceDto purchaseMembership(PurchaseDto purchase, long memberId);

}
