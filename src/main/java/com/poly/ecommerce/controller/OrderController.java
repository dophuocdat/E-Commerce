package com.poly.ecommerce.controller;

import com.poly.ecommerce.entity.DTO.OrderDTO;
import com.poly.ecommerce.entity.Order;
import com.poly.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/ecommerce/orders")
public class OrderController {
    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @PostMapping
    public ResponseEntity<Order> addOrder(@RequestBody OrderDTO orderDTO) {
        Order createOrder = orderService.addOrder(orderDTO);
        return ResponseEntity.ok(createOrder);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long orderId, @RequestBody OrderDTO orderDTO) {
        Order updateOrder = orderService.updateOrder(orderId, orderDTO);
        return ResponseEntity.ok(updateOrder);
    }
    @DeleteMapping("/{orderId}")
    public ResponseEntity<Void> deleteOrder(
            @PathVariable Long orderId
    ){
        orderService.deleteOrder(orderId);
        return ResponseEntity.noContent().build();
    }

}
