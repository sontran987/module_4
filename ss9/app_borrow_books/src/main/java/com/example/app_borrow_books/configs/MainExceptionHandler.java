package com.example.app_borrow_books.configs;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MainExceptionHandler extends Exception {
    @ExceptionHandler(Exception.class)
    public String get500Page(Exception ex, Model model) {
        model.addAttribute("msg", ex.getMessage());
        return "/500";
    }
}
