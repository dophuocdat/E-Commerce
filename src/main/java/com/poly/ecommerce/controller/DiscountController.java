package com.poly.ecommerce.controller;

import com.poly.ecommerce.entity.DTO.DiscountDto;
import com.poly.ecommerce.entity.Discount;
import com.poly.ecommerce.service.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/ecommerce/discounts")
public class DiscountController {

    private DiscountService discountService;

    @Autowired
    public DiscountController(DiscountService discountService) {
        this.discountService = discountService;
    }

    @GetMapping
    public ResponseEntity<List<Discount>> getAiiDiscount() {
        List<Discount> discounts = discountService.getAllDiscounts();
        return ResponseEntity.ok(discounts);
    }

    @PostMapping
    public ResponseEntity<Discount> addDiscount(@RequestBody DiscountDto discountDto) {
        Discount createdDiscount = discountService.addDiscount(discountDto);
        return ResponseEntity.ok(createdDiscount);
    }

    @PutMapping("/{discountId}")
    public ResponseEntity<Discount> updateDiscount(@PathVariable Long discountId, @RequestBody DiscountDto discountDto) {
        Discount updateDetails = discountService.updateDiscount(discountId, discountDto);
        return ResponseEntity.ok(updateDetails);
    }

    @DeleteMapping("/{discountId}")
    public ResponseEntity<Void> deleteDiscount(
            @PathVariable Long discountId
    ){
        discountService.deleteDiscount(discountId);
        return ResponseEntity.noContent().build();
    }
}
