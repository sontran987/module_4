package com.example.exercise_1.service.impl;

import com.example.exercise_1.service.IConversionService;
import org.springframework.stereotype.Service;

@Service
public class ConversionServiceImpl implements IConversionService {
    @Override
    public double calculate(double number, double exchange) {
        return number * exchange;
    }
}
