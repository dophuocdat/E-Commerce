package com.poly.ecommerce.entity.DTO;

import lombok.Data;

@Data
public class ProductDTO {
    private String name;
    private String description;
    private double price;
    private int quantityInStock;
    private String type;
}
