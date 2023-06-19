package com.example.exercise_may_tinh_ca_nhan.controller;

import com.example.exercise_may_tinh_ca_nhan.models.service.IConputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class PersonalComputerController {
    @Autowired
    private IConputerService conputerService;

    @GetMapping()
    public String home() {
        return "personal-computer";
    }

    @PostMapping("/calculate")
    public String computer(@RequestParam(value = "number1", required = false) Double number1, @RequestParam(value = "number2", required = false) Double number2,
                           @RequestParam(value = "calculate", required = false) String calculate, RedirectAttributes redirectAttributes) {
        String message = "Result: ";
        if (number2 == 0.0 && calculate.equals("divi")) {
            message = "No result";
            redirectAttributes.addFlashAttribute("result", message);
            return "redirect:/";
        }
        if (number1 == null || number2 == null || calculate == "") {
            return "redirect:/";
        }
        double result = conputerService.calculate(number1, number2, calculate);
        redirectAttributes.addFlashAttribute("result", message + result);
        return "redirect:/";
    }
}
