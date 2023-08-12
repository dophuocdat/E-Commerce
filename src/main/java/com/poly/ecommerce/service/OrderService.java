package com.poly.ecommerce.service;

import com.poly.ecommerce.entity.DTO.OrderDTO;
import com.poly.ecommerce.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();

    Order addOrder(OrderDTO orderDTO);

    Order updateOrder(Long orderId, OrderDTO orderDTO);

    void deleteOrder(Long orderId);

    Order getByOrderId(Long orderId);

    void deleteAll();
}
