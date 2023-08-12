package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.Customer;
import com.poly.ecommerce.entity.DTO.OrderDTO;
import com.poly.ecommerce.entity.Order;
import com.poly.ecommerce.repository.CustomerRepository;
import com.poly.ecommerce.repository.OrderRepository;
import com.poly.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private OrderRepository orderRepository;
    private CustomerRepository customerRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, CustomerRepository customerRepository) {
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order addOrder(OrderDTO orderDTO) {
        Order order = new Order();
        Customer customer = customerRepository.findById(orderDTO.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));
        order.setCustomer(customer);
        order.setStatus(orderDTO.isStatus());
        order.setTotalAmount(orderDTO.getTotalAmount());

        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Long orderId, OrderDTO orderDTO) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));
        Customer customer = customerRepository.findById(orderDTO.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));
        order.setCustomer(customer);
        order.setStatus(order.isStatus());
        order.setTotalAmount(orderDTO.getTotalAmount());

        return orderRepository.save(order);
    }

    @Override
    public void deleteOrder(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));
        orderRepository.delete(order);
    }

    @Override
    public Order getByOrderId(Long orderId) {
        Order order = orderRepository.findById(orderId).get();
        return order;

    }

    @Override
    public void deleteAll() {
        orderRepository.deleteAll();

    }
}
