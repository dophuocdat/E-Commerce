package com.poly.ecommerce.service;

import com.poly.ecommerce.entity.DTO.ProductDTO;
import com.poly.ecommerce.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService {

    List<Product> getAllProduct();

    Product addProduct(ProductDTO productDTO);

    Product updateProduct(Long productId, ProductDTO productDTO);

    void deleteProduct(Long productId);
}
