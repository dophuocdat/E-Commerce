package com.poly.ecommerce.service.impl;

import com.poly.ecommerce.entity.DTO.DiscountDto;
import com.poly.ecommerce.entity.Discount;
import com.poly.ecommerce.repository.DiscountRepository;
import com.poly.ecommerce.service.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountServiceImpl implements DiscountService {

    private DiscountRepository discountRepository;


    @Autowired
    public DiscountServiceImpl(DiscountRepository discountRepository) {
        this.discountRepository = discountRepository;
    }

    @Override
    public List<Discount> getAllDiscounts() {
        return discountRepository.findAll();
    }

    @Override
    public Discount addDiscount(DiscountDto discountDto) {
        Discount discount = new Discount();
        discount.setCode(discountDto.getCode());
        discount.setAmount(discountDto.getAmount());
        discount.setExpiryDate(discountDto.getExpiryDate());

        return discountRepository.save(discount);
    }

    @Override
    public Discount updateDiscount(Long discountId, DiscountDto discountDto) {
        Discount discount = discountRepository.findById(discountId)
                .orElseThrow(() ->  new IllegalArgumentException("Discount not found"));

        discount.setCode(discountDto.getCode());
        discount.setAmount(discountDto.getAmount());
        discount.setExpiryDate(discountDto.getExpiryDate());

        return discountRepository.save(discount);
    }

    @Override
    public void deleteDiscount(Long discountId) {
        Discount discount = discountRepository.findById(discountId)
                .orElseThrow(() -> new IllegalArgumentException("Discount not found"));
        discountRepository.delete(discount);
    }
}
