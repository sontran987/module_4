package com.example.exercise_2.controller;

import com.example.exercise_2.service.IDictionnaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DictionaryController {
    @Autowired
    private IDictionnaryService dictionnaryService;

    @GetMapping("")
    public String search() {
        return "/index";
    }

    @PostMapping("/dictionary")
    public String search(@RequestParam("english") String english, Model model) {
        model.addAttribute("result", dictionnaryService.search(english));
        return "/index";
    }
}
