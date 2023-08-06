package com.poly.ecommerce.entity.DTO;

import lombok.Data;

@Data
public class OrderDeTailsDTO {
    private double quantity;
    private Long productId;
    private Long orderId;
    private Long discountId;

}
