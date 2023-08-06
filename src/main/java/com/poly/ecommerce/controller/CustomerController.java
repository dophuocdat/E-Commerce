package com.poly.ecommerce.controller;

import com.poly.ecommerce.entity.Customer;
import com.poly.ecommerce.entity.DTO.CustomerDTO;
import com.poly.ecommerce.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class CustomerController {
    private CustomerService customerService;


    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/register")
    public ResponseEntity<Customer> registerCustomer(@RequestBody CustomerDTO customerDTO) {
        Customer createdCustomer = customerService.register(customerDTO);
        return ResponseEntity.ok(createdCustomer);
    }

    @PostMapping("/login")
    public ResponseEntity<Customer> loginCustomer(@RequestParam String email,
                                                  @RequestParam String password){
        Customer customer = customerService.loginUser(email,password);
        if(customer == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customer);
    }
}