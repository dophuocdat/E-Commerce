package com.poly.ecommerce.entity.DTO;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class PaymentDTO {
    private Timestamp date;
    private double totalAmount;
    private String paymentMethod;
    private Long orderDetailsId;
    private Long customerId;

}
