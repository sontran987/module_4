package com.example.cart.controller;

import com.example.cart.model.Cart;
import com.example.cart.model.Product;
import com.example.cart.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import java.util.Optional;

@Controller
@SessionAttributes("cart")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @ModelAttribute("cart")
    public Cart setupCart(){
        return new Cart();
    }
    @GetMapping("/shop")
    public ModelAndView showShop(){
        ModelAndView modelAndView = new ModelAndView("/shop");
        modelAndView.addObject("products",iProductService.findAll());
        return modelAndView;
    }
    @GetMapping("/add/{id}")
    public String addToCart(@PathVariable Long id, @ModelAttribute Cart cart, @RequestParam("action") String action){
        Optional<Product> productOptional = iProductService.findById(id);
        if (!productOptional.isPresent()){
            return "/error.404";
        }
        if (action.equals("show")){
            cart.addProduct(productOptional.get());
            return "redirect:/shop_cart";
        }
        cart.addProduct(productOptional.get());
        return "redirect:/shop";
    }
    @GetMapping("/down/{id}")
    public String downToCart(@PathVariable Long id, @ModelAttribute Cart cart, @RequestParam("action") String action){
        Optional<Product> productOptional = iProductService.findById(id);
        if (!productOptional.isPresent()){
            return "/error.404";
        }
        if (action.equals("show")){
            cart.downProduct(productOptional.get());
            return "redirect:/shop_cart";
        }
        cart.downProduct(productOptional.get());
        return "redirect:/shop";
    }
    @GetMapping("/delete/{id}")
    public String deleteToCart(@PathVariable Long id, @ModelAttribute Cart cart, @RequestParam("action") String action){
        Optional<Product> productOptional = iProductService.findById(id);
        if (!productOptional.isPresent()){
            return "/error.404";
        }
        if (action.equals("show")){
            cart.removeProduct(productOptional.get());
            return "redirect:/shop_cart";
        }
        cart.removeProduct(productOptional.get());
        return "redirect:/shop";
    }
    @GetMapping("/view/{id}")
    public String view(@PathVariable Long id, Model model){
        model.addAttribute("product",iProductService.findById(id).get());
        return "/view";
    }

}
