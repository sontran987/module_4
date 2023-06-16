package com.example.exercise_sandwich_condiments.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Arrays;

@Controller
public class SandwichCondimentsController {

    @GetMapping("")
    public String save(){
        return "/show-condiments";
    }
    @PostMapping("/save")
    public String save(@RequestParam(value = "condiment",required = false) String[] condiment, RedirectAttributes redirectAttributes){
        String message = "You need more seasoning: ";
        String notification ="You haven't chosen the seasoning for the cake yet.";
        if (condiment!= null){
        String condimen ="";
        for (String s : condiment) {
            condimen += s+",";
        }
            redirectAttributes.addFlashAttribute("msg",message+condimen);
        }else {
            redirectAttributes.addFlashAttribute("msg",notification);
        }
        return "redirect:/";

    }
}
