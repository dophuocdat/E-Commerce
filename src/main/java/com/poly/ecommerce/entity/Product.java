package com.poly.ecommerce.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @NotNull
    @NotEmpty
    private String name;
    @NotNull
    @NotEmpty
    private String description;
    @NotNull
    @DecimalMin(value = "0.0", inclusive = false)
    private double price;

    @NotNull
    @Min(value = 25)
    private int quantityInStock;

    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String imagePath;

    @NotNull

    private String type;
}