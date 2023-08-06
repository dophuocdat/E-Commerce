package com.poly.ecommerce.service;

import com.poly.ecommerce.entity.DTO.DiscountDto;
import com.poly.ecommerce.entity.Discount;

import java.util.List;

public interface DiscountService {
    List<Discount> getAllDiscounts();

    Discount addDiscount(DiscountDto discountDto);

    Discount updateDiscount(Long discountId, DiscountDto discountDto);

    void deleteDiscount(Long discountId);
}
