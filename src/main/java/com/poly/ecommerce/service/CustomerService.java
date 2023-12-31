package com.poly.ecommerce.service;


import com.poly.ecommerce.entity.Customer;
import com.poly.ecommerce.entity.DTO.CustomerDTO;

import java.util.List;

public interface CustomerService {
    List<Customer> findAllUser();

    Customer register(CustomerDTO customer);

    Customer loginUser(String email, String password);
}
