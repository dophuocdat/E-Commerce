package com.poly.ecommerce.repository;

import com.poly.ecommerce.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
