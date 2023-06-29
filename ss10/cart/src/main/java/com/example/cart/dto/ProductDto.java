package com.example.cart.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class ProductDto implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
