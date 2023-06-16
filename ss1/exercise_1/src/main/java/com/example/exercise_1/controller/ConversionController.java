package com.example.exercise_1.controller;

import com.example.exercise_1.service.IConversionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/calculate")
public class ConversionController {
    @Autowired
    private IConversionService conversion;

    @PostMapping()
    public String calculate(@RequestParam("usd") double number, @RequestParam("exchange") double exchange, Model model) {
        model.addAttribute("calculate", conversion.calculate(number, exchange));
        return "/calculate";
    }
}
