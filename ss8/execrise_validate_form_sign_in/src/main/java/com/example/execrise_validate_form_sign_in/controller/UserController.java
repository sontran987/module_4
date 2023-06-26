package com.example.execrise_validate_form_sign_in.controller;

import com.example.execrise_validate_form_sign_in.dto.UserDto;
import com.example.execrise_validate_form_sign_in.model.model.Users;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class UserController {

    @GetMapping("")
    public String home(Model model){
        model.addAttribute("userDto",new UserDto());
        return "index";
    }
    @PostMapping("/create")
    public String create(@Valid @ModelAttribute UserDto userDto,
                         BindingResult bindingResult, Model model){
        if (bindingResult.hasErrors()){
            model.addAttribute("userDto",userDto);
            return "index";
        }
        Users userEntity = new Users();
        BeanUtils.copyProperties(userDto,userEntity);

        model.addAttribute("user",userEntity);
        return "result";
    }
}
