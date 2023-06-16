package com.example.exercise_1.service.impl;

import com.example.exercise_1.service.IChuyenDoiTienTe;
import org.springframework.stereotype.Service;

@Service
public class ChuyenDoiTienTe implements IChuyenDoiTienTe {
    @Override
    public double calculate(double number, double exchange) {
        return number * exchange;
    }
}
