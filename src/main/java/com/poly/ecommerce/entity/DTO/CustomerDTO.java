package com.poly.ecommerce.entity.DTO;

import java.util.Set;

import lombok.Data;

@Data
public class CustomerDTO {
    private String address;
    private String email;
    private String password;
    private String phone;
    private Set<String> roles; // Thêm trường roles vào DTO}
}