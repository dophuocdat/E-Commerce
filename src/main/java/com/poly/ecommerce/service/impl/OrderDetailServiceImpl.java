package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.DTO.OrderDeTailsDTO;
import com.poly.ecommerce.entity.Discount;
import com.poly.ecommerce.entity.Order;
import com.poly.ecommerce.entity.OrderDetails;
import com.poly.ecommerce.entity.Product;
import com.poly.ecommerce.repository.DiscountRepository;
import com.poly.ecommerce.repository.OrderDetailsRepository;
import com.poly.ecommerce.repository.OrderRepository;
import com.poly.ecommerce.repository.ProductRepository;
import com.poly.ecommerce.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements OrderDetailsService {
    private OrderDetailsRepository orderDetailsRepository;
    private ProductRepository productRepository;
    private OrderRepository orderRepository;
    private DiscountRepository discountRepository;

    @Autowired
    public OrderDetailServiceImpl(OrderDetailsRepository orderDetailsRepository,
                                  ProductRepository productRepository,
                                  OrderRepository orderRepository,
                                  DiscountRepository discountRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.discountRepository = discountRepository;
    }


    @Override
    public List<OrderDetails> getALlOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    @Override
    public OrderDetails addOrderDetails(OrderDeTailsDTO orderDeTailsDTO) {
        OrderDetails orderDetails = new OrderDetails();

        Product product = productRepository.findById(orderDeTailsDTO.getProductId())
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        Order order = orderRepository.findById(orderDeTailsDTO.getOrderId())
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));
        Discount discount = discountRepository.findById(orderDeTailsDTO.getDiscountId())
                .orElseThrow(() -> new IllegalArgumentException("Discount not found"));
        orderDetails.setQuantity(orderDeTailsDTO.getQuantity());
        orderDetails.setProduct(product);
        orderDetails.setOrder(order);
        orderDetails.setDiscount(discount);
        return orderDetailsRepository.save(orderDetails);
    }

    @Override
    public OrderDetails updateOrderDetails(Long orderDetailsId, OrderDeTailsDTO orderDeTailsDTO) {

        OrderDetails orderDetails = orderDetailsRepository.findById(orderDetailsId)
                .orElseThrow(() -> new IllegalArgumentException("Order details not found"));
        Product product = productRepository.findById(orderDeTailsDTO.getProductId())
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        Order order = orderRepository.findById(orderDeTailsDTO.getOrderId())
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));
        Discount discount = discountRepository.findById(orderDeTailsDTO.getDiscountId())
                .orElseThrow(() -> new IllegalArgumentException("Discount not found"));
        orderDetails.setQuantity(orderDeTailsDTO.getQuantity());
        orderDetails.setProduct(product);
        orderDetails.setOrder(order);
        orderDetails.setDiscount(discount);
        return orderDetailsRepository.save(orderDetails);
    }

    @Override
    public void deleteOrderDetails(Long orderDetaisId) {
        OrderDetails orderDetails = orderDetailsRepository.findById(orderDetaisId)
                .orElseThrow(() -> new IllegalArgumentException("Order details not found"));
        orderDetailsRepository.delete(orderDetails);
    }
}
