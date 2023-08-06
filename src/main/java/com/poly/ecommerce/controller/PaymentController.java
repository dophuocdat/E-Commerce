package com.poly.ecommerce.controller;

import com.poly.ecommerce.entity.DTO.PaymentDTO;
import com.poly.ecommerce.entity.Payment;
import com.poly.ecommerce.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ecommerce/payments")
public class PaymentController {

    private PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayment() {
        List<Payment> payments = paymentService.getAllPayments();
        return ResponseEntity.ok(payments);
    }

    @PostMapping
    public ResponseEntity<Payment> addPayment(@RequestBody PaymentDTO paymentDTO){
        Payment createPayment = paymentService.addPayment(paymentDTO);
        return ResponseEntity.ok(createPayment);
    }

}
