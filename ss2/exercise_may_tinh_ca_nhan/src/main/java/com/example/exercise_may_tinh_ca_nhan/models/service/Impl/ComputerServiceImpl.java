package com.example.exercise_may_tinh_ca_nhan.models.service.Impl;

import com.example.exercise_may_tinh_ca_nhan.models.service.IConputerService;
import org.springframework.stereotype.Service;

@Service
public class ComputerServiceImpl implements IConputerService {

    @Override
    public double calculate(double num1, double num2, String calculate) {
        double number = 0;
            switch (calculate) {
                case "add":
                    number = num1 + num2;
                    break;
                case "sub":
                    number = num1 - num2;
                    break;
                case "mutip":
                    number = num1 * num2;
                    break;
                case "divi":
                    number = num1/num2;
            }
            return number;
    }
}
