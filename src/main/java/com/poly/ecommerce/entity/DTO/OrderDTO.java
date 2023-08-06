package com.poly.ecommerce.entity.DTO;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class OrderDTO {
    private Long customerId;
    private boolean status;
    private double totalAmount;

}
