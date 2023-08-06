package com.poly.ecommerce.service;

import com.poly.ecommerce.entity.DTO.ProductDetailsDTO;
import com.poly.ecommerce.entity.ProductDetails;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductDetailsService {

    List<ProductDetails> getAllProductDetails();

    ProductDetails addProductDetails(ProductDetailsDTO productDetailsDTO);

    ProductDetails updateProductDetails(Long productDetailsId, ProductDetailsDTO productDetailsDTO);

    void deleteProductDetails(Long productDetailsId);
}
