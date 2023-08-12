package com.poly.ecommerce.controller;

import com.poly.ecommerce.entity.DTO.ProductDTO;
import com.poly.ecommerce.entity.Product;
import com.poly.ecommerce.service.ProductService;

import jakarta.servlet.annotation.MultipartConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/ecommerce/product")
@MultipartConfig
public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProduct() {
        List<Product> products = productService.getAllProduct();
        return ResponseEntity.ok(products);
    }

    @PostMapping()
    public ResponseEntity<Product> addProduct(@RequestParam("file") MultipartFile file,
            @ModelAttribute ProductDTO productDTO){
        Product createdProduct = productService.addProduct(file, productDTO);
        return ResponseEntity.ok(createdProduct);
    }

    @PutMapping("/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long productId,
            @RequestBody ProductDTO productDTO) {
        Product updateProduct = productService.updateProduct(productId, productDTO);
        return ResponseEntity.ok(updateProduct);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        productService.deleteProduct(productId);
        return ResponseEntity.noContent().build();
    }

}
