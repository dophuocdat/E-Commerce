package com.poly.ecommerce.controller;


import com.poly.ecommerce.entity.Customer;
import com.poly.ecommerce.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class E_CommerceWebController {

    private CustomerService customerService;

    @Autowired
    public E_CommerceWebController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/user/getAll")
    public List<Customer> findAllUser() {
        return customerService.findAllUser();
    }

    @GetMapping("/CheckEmail")
    public ResponseEntity<Customer> checkEmail( @RequestParam String emailOrPhone){
//        System.out.println(emailOrPhone);
        return customerService.findByEmailOrPhone(emailOrPhone);
    }


    @PostMapping("/signup")
    public Customer signUp(){
        return null;
    }


}
