package com.example.complete_shopping_cart.controller;

import com.example.complete_shopping_cart.model.model.Cart;
import com.example.complete_shopping_cart.model.model.Product;
import com.example.complete_shopping_cart.model.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.*;

@Controller
@SessionAttributes("cart")
public class ProductController {
    @Autowired
    private IProductService productService;
    @GetMapping("")
    public String home(Model model){
        model.addAttribute("product",productService.findAll());
        return "home";
    }

    @ModelAttribute("cart")
    public List<Cart> initCart() {
        return new ArrayList<>();
//        return productService.findAllCart();
    }

    @GetMapping("/shopping-cart")
    public String showCart (@SessionAttribute("cart") List<Cart> cart, Model model){
        model.addAttribute("cart",cart);
        int quantity = 0;
        for (Cart c : cart) {
            quantity += c.getQuantity();
        }
        model.addAttribute("quantity",quantity);
        return "cart";
    }
    @GetMapping("/detail/{id}")
    public String detail(@PathVariable Integer id, Model model) {
        Product product = this.productService.findById(id);
        model.addAttribute("product",product);
        return "detail";
    }

    @GetMapping("/add/{id}")
    public String addToCart(@PathVariable Integer id, @SessionAttribute("cart") List<Cart> cart,
                            RedirectAttributes redirectAttributes) {
//        if (cart == null){
//            Cart cart1 =new Cart(0,productService.findById(id));
//            cart.add(cart1);
//        }
        if (cart.equals(productService.findById(id))){
            Cart cart1 =new Cart(0,productService.findById(id));
            cart.add(cart1);
        }
        for (int i = 0; i < cart.size(); i++) {
            if (cart.get(i).getProduct().getId()==id){
               cart.get(i).setQuantity(cart.get(i).getQuantity()+1);
            }
        }
        return "redirect:/";
    }

}
