package com.example.execries_product_management.controller;

import com.example.execries_product_management.models.model.Product;
import com.example.execries_product_management.models.repository.IProductRepository;
import com.example.execries_product_management.models.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.swing.*;

@Controller
public class ProductController {
    @Autowired
    private IProductService productService;

    @RequestMapping("")
    public String home(Model model){
        model.addAttribute("products",productService.display());
        return "display";
    }
    @GetMapping("/showFormEdit/{id}")
    public String showFormEdit(@PathVariable int id, Model model){
        model.addAttribute("products",productService.getProductById(id));
        return "edit";

    }
    @PostMapping("/edit")
    public String edit(@ModelAttribute Product product, RedirectAttributes redirectAttributes){
        productService.editProduct(product);
        String message = "Edit success";
        redirectAttributes.addFlashAttribute("msg",message);
        return "redirect:/";
    }
    @GetMapping("/showDetail/{id}")
    public String showDetail(@PathVariable int id, Model model){
        model.addAttribute("products",productService.getProductById(id));
        return "detail";

    }
    @GetMapping("/delete/{id}")
    public String delete(@PathVariable int id, RedirectAttributes redirectAttributes){
        productService.deleteProduct(id);
        String message = "delete success";
        redirectAttributes.addFlashAttribute("msg",message);
        return "redirect:/";
    }
    @GetMapping("/showFormCreate")
    public String showFormCreate(Model model){
        Product product = new Product();
        model.addAttribute("product",product);

        return "create";
    }
    @PostMapping("/create")
    public String create(@ModelAttribute Product product, RedirectAttributes redirectAttributes){
        productService.addProduct(product);
        String message = "create success";
        redirectAttributes.addFlashAttribute("msg",message);
        return "redirect:/";
    }
    @GetMapping("/search")
    public String search(@RequestParam("search") String name, Model model){
        model.addAttribute("products",productService.searchProduct(name));
        return "display";
    }
}
