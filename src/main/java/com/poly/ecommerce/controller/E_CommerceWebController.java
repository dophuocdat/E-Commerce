package com.poly.ecommerce.controller;


import com.poly.ecommerce.entity.Customer;
import com.poly.ecommerce.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class E_CommerceWebController {

    private CustomerService customerService;

    @Autowired
    public E_CommerceWebController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("")
    public List<Customer> findAllUser() {
        return customerService.findAllUser();
    }
    @PostMapping("/signup")
    public Customer signUp(){
        return null;
    }


}
