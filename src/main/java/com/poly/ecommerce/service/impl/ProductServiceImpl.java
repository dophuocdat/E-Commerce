package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.DTO.ProductDTO;
import com.poly.ecommerce.entity.Product;
import com.poly.ecommerce.repository.ProductRepository;
import com.poly.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Product addProduct(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setQuantityInStock(productDTO.getQuantityInStock());

        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long productId, ProductDTO productDTO) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setQuantityInStock(productDTO.getQuantityInStock());
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long productId) {
        Product product = productRepository.findById(productId)
                        .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        productRepository.delete(product);
    }


}
