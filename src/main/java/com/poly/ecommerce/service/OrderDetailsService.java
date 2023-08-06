package com.poly.ecommerce.service;

import com.poly.ecommerce.entity.DTO.OrderDeTailsDTO;
import com.poly.ecommerce.entity.OrderDetails;

import java.util.List;

public interface OrderDetailsService {
    List<OrderDetails> getALlOrderDetails();

    OrderDetails addOrderDetails(OrderDeTailsDTO orderDeTailsDTO);

    OrderDetails updateOrderDetails(Long orderDetailsId, OrderDeTailsDTO orderDeTailsDTO);

    void deleteOrderDetails(Long orderDetaisId);
}
