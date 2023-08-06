package com.poly.ecommerce.entity.DTO;

import lombok.Data;

import java.util.Date;

@Data
public class DiscountDto {
    private String code;
    private double amount;
    private Date  expiryDate;

}
