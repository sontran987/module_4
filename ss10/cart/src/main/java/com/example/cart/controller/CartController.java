package com.example.cart.controller;

import com.example.cart.model.Cart;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CartController {
    @ModelAttribute("cart")
    public Cart setupCart(){
        return new Cart();
    }
    @GetMapping("/shop_cart")
    public ModelAndView showCart(@SessionAttribute("cart") Cart cart){
        ModelAndView modelAndView = new ModelAndView("/cart");
        modelAndView.addObject("cart", cart);
        return modelAndView;
    }
    @GetMapping("/payment")
    public ModelAndView payment(@SessionAttribute Cart cart){

        ModelAndView modelAndView = new ModelAndView("cart");
        if (cart.removeAllProduct()){
            modelAndView.addObject("msg","Ban đã thanh toán thành công!");
        }else {
            modelAndView.addObject("msg", "Giỏ hàng rỗng vui lòng chọn mua trước khi thanh toán!");
        }
        return modelAndView;
    }
}
