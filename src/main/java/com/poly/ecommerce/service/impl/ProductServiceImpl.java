package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.DTO.ProductDTO;
import com.poly.ecommerce.entity.Product;
import com.poly.ecommerce.repository.ProductRepository;
import com.poly.ecommerce.service.ProductService;

import jakarta.servlet.annotation.MultipartConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Base64;
import java.util.List;

@Service
@MultipartConfig
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
    public Product addProduct(MultipartFile file, ProductDTO productDTO) {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        if (fileName.contains("..")) {
            throw new IllegalArgumentException("Invalid file name");
        }
        String base64Image;
        try {
            byte[] imageBytes = file.getBytes();
            base64Image = Base64.getEncoder().encodeToString(imageBytes);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        Product product = new Product();

        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setQuantityInStock(productDTO.getQuantityInStock());
        product.setType(productDTO.getType());
        product.setImagePath(base64Image);
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
        product.setType(productDTO.getType());
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        productRepository.delete(product);
    }

    @Override
    public Product findById(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        return product;
    }

}
