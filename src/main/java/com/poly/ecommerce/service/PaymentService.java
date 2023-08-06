package com.poly.ecommerce.service;

import com.poly.ecommerce.entity.DTO.PaymentDTO;
import com.poly.ecommerce.entity.Payment;

import java.util.List;

public interface PaymentService {
    List<Payment> getAllPayments();

    Payment addPayment(PaymentDTO paymentDTO);
}
