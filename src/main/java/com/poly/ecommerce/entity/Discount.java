package com.poly.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Discount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long discountId;

    private String code;

    private double amount;

    @Temporal(TemporalType.DATE)
    private Date expiryDate;
}