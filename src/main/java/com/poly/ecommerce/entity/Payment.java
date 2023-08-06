package com.poly.ecommerce.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp date;

    private double totalAmount;

    private String paymentMethod;

    @ManyToOne
    @JoinColumn(name = "orderDetails")
    private OrderDetails orderDetails;

    @ManyToOne
    @JoinColumn(name = "customerId")
    private Customer user;

    @PrePersist
    public void prePersist() {
        if (date == null) {
            date = new Timestamp(System.currentTimeMillis());
        }
    }
}
