package com.poly.ecommerce.controller;

import com.poly.ecommerce.entity.DTO.ProductDTO;
import com.poly.ecommerce.entity.DTO.ProductDetailsDTO;
import com.poly.ecommerce.entity.ProductDetails;
import com.poly.ecommerce.service.ProductDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/ecommerce/product-details")
public class CustomerDetailsController {

    private ProductDetailsService productDetailsService;

    @Autowired
    public CustomerDetailsController(ProductDetailsService productDetailsService) {
        this.productDetailsService = productDetailsService;
    }

    @GetMapping
    public ResponseEntity<List<ProductDetails>> getAllProductDetails() {
        List<ProductDetails> productDetails = productDetailsService.getAllProductDetails();

        return ResponseEntity.ok(productDetails);
    }

    @PostMapping
    public ResponseEntity<ProductDetails> addProductDetails(@RequestBody ProductDetailsDTO productDetailsDTO) {
        ProductDetails createdProductDetails = productDetailsService.addProductDetails(productDetailsDTO);
        return ResponseEntity.ok(createdProductDetails);
    }

    @PutMapping("/{productDetailsId}")
    public ResponseEntity<ProductDetails> updateProductDetails(@PathVariable Long productDetailsId, @RequestBody ProductDetailsDTO productDetailsDTO) {
        ProductDetails updateProductDetails = productDetailsService.updateProductDetails(productDetailsId, productDetailsDTO);
        return ResponseEntity.ok(updateProductDetails);
    }

    @DeleteMapping("/{productDetailsId}")
    public ResponseEntity<Void> deleteProductDetails(@PathVariable Long productDetailsId ){
        productDetailsService.deleteProductDetails(productDetailsId);
        return ResponseEntity.noContent().build();
    }

}
