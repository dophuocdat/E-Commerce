package com.poly.ecommerce.controller;

import com.poly.ecommerce.entity.DTO.OrderDeTailsDTO;
import com.poly.ecommerce.entity.OrderDetails;
import com.poly.ecommerce.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("ecommerce/order-details")
public class OrderDetailsController {

    private final OrderDetailsService orderDetailsService;

    @Autowired
    public OrderDetailsController(OrderDetailsService orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }

    @GetMapping
    public ResponseEntity<List<OrderDetails>> getAllOrderDetails() {
        List<OrderDetails> orderDetails = orderDetailsService.getALlOrderDetails();
        return ResponseEntity.ok(orderDetails);
    }

    @PostMapping
    public ResponseEntity<OrderDetails> addOrderDetails(
            @RequestBody OrderDeTailsDTO orderDeTailsDTO) {
        OrderDetails createdOrderDetails = orderDetailsService.addOrderDetails(orderDeTailsDTO);
        return ResponseEntity.ok(createdOrderDetails);
    }

    @PutMapping("/{orderDetailsId}")
    public ResponseEntity<OrderDetails> updateDetails(
            @PathVariable Long orderDetailsId,
            @RequestBody OrderDeTailsDTO orderDeTailsDTO
    ) {
        OrderDetails updateOrderDetails = orderDetailsService.updateOrderDetails(orderDetailsId, orderDeTailsDTO);
        return ResponseEntity.ok(updateOrderDetails);
    }

    @DeleteMapping("/{orderDetaisId}")
    public ResponseEntity<Void> deleteOrderDetails(
            @PathVariable Long orderDetaisId
    ){
        orderDetailsService.deleteOrderDetails(orderDetaisId);
        return ResponseEntity.noContent().build();
    }
}
