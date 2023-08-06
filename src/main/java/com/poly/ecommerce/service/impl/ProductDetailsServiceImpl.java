package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.DTO.ProductDetailsDTO;
import com.poly.ecommerce.entity.Product;
import com.poly.ecommerce.entity.ProductDetails;
import com.poly.ecommerce.repository.ProductDetailsRepository;
import com.poly.ecommerce.repository.ProductRepository;
import com.poly.ecommerce.service.ProductDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductDetailsServiceImpl implements ProductDetailsService {

    private ProductDetailsRepository productDetailsRepository;
    private  ProductRepository productRepository;

    @Autowired
    public ProductDetailsServiceImpl(ProductDetailsRepository productDetailsRepository, ProductRepository productRepository) {
        this.productDetailsRepository = productDetailsRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<ProductDetails> getAllProductDetails() {

        return productDetailsRepository.findAll();
    }

    @Override
    public ProductDetails addProductDetails(ProductDetailsDTO productDetailsDTO) {
        ProductDetails productDetails = new ProductDetails();
        Product product = productRepository.findById(productDetailsDTO.getProductId())
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        productDetails.setProduct(product);
        productDetails.setDetails(productDetailsDTO.getDetails());
        return productDetailsRepository.save(productDetails);
    }

    @Override
    public ProductDetails updateProductDetails(Long productDetailsId, ProductDetailsDTO productDetailsDTO) {
        ProductDetails productDetails = productDetailsRepository.findById(productDetailsId)
                .orElseThrow(() -> new IllegalArgumentException("Product details not found"));
        Product product = productRepository.findById(productDetailsDTO.getProductId())
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        productDetails.setProduct(product);
        productDetails.setDetails(productDetailsDTO.getDetails());

        return productDetailsRepository.save(productDetails);
    }

    @Override
    public void deleteProductDetails(Long productDetailsId) {
        ProductDetails productDetails = productDetailsRepository.findById(productDetailsId)
                .orElseThrow(() -> new IllegalArgumentException("Product delete not found"));
        productDetailsRepository.delete(productDetails);
    }
}
