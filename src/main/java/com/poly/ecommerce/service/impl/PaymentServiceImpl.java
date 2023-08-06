package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.Customer;
import com.poly.ecommerce.entity.DTO.PaymentDTO;
import com.poly.ecommerce.entity.Discount;
import com.poly.ecommerce.entity.OrderDetails;
import com.poly.ecommerce.entity.Payment;
import com.poly.ecommerce.repository.CustomerRepository;
import com.poly.ecommerce.repository.DiscountRepository;
import com.poly.ecommerce.repository.OrderDetailsRepository;
import com.poly.ecommerce.repository.PaymentRepository;
import com.poly.ecommerce.service.OrderDetailsService;
import com.poly.ecommerce.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentServiceImpl implements PaymentService {
    private PaymentRepository paymentRepository;
    private OrderDetailsRepository orderDetailsRepository;
    private CustomerRepository customerRepository;
    private DiscountRepository discountRepository;

    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository,
                              OrderDetailsRepository orderDetailsRepository,
                              CustomerRepository customerRepository,
                              DiscountRepository discountRepository) {
        this.paymentRepository = paymentRepository;
        this.orderDetailsRepository = orderDetailsRepository;
        this.customerRepository = customerRepository;
        this.discountRepository = discountRepository;
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment addPayment(PaymentDTO paymentDTO) {
        Payment payment = calculateTotalAmount(paymentDTO);
        return paymentRepository.save(payment);
    }

    public Payment calculateTotalAmount(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        double totalAmount = 0.0;

        OrderDetails orderDetails = orderDetailsRepository.findById(paymentDTO.getOrderDetailsId())
                .orElseThrow(() -> new IllegalArgumentException("Order details not found"));

        Long discountId = orderDetails.getDiscount().getDiscountId();
        Discount discount = null;
        if (discountId != null) {
            discount = discountRepository.findById(discountId)
                    .orElseThrow(() -> new IllegalArgumentException("Discount not found"));
        }

        totalAmount = orderDetails.getQuantity() * orderDetails.getProduct().getPrice();
        if (discount != null) {
            totalAmount -= discount.getAmount();
        }


        payment.setTotalAmount(totalAmount);
        payment.setPaymentMethod(paymentDTO.getPaymentMethod());
        payment.setOrderDetails(orderDetails);
        payment.setUser(orderDetails.getOrder().getCustomer());
        return payment;
    }
}
