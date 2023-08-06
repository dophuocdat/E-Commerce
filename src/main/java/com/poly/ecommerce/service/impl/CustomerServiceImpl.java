package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.Customer;
import com.poly.ecommerce.entity.DTO.CustomerDTO;
import com.poly.ecommerce.repository.CustomerRepository;
import com.poly.ecommerce.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {


    private CustomerRepository customerRepository;


    private  BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository,
                               BCryptPasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }




    @Override
    public List<Customer> findAllUser() {
        return customerRepository.findAll();
    }


    @Override
    public Customer register(CustomerDTO customerDTO) {
        String email = customerDTO.getEmail();
        if(customerRepository.existsByEmail(email)){
            throw new IllegalArgumentException("Email already exists. Please choose a different email");

        }


        Customer customer = new Customer();
        customer.setAddress(customerDTO.getAddress());
        customer.setEmail(customerDTO.getEmail());
        customer.setPassword(passwordEncoder.encode(customerDTO.getPassword()));
        customer.setPhone(customerDTO.getPhone());
        return customerRepository.save(customer);
    }


    public Customer loginUser(String email, String password){
        Customer customer = customerRepository.findByEmail(email);
        if(customer != null && passwordEncoder.matches(password,customer.getPassword())){
            return customer;
        }
        return null;
    }

}
