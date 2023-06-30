package com.example.execries_restful_app_blog.controller;

import com.example.execries_restful_app_blog.model.model.Category;
import com.example.execries_restful_app_blog.model.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;
    @GetMapping("")
    public String display(Model model){
        model.addAttribute("category",categoryService.displayCategory());
        return "displayCategory";
    }
    @GetMapping("/create")
    public String showFormCreate(Model model){
        model.addAttribute("category",new Category());
        return "createCategory";
    }
    @PostMapping("/add")
    public String create(@ModelAttribute Category category, RedirectAttributes redirectAttributes) {
        categoryService.createCategory(category);
        redirectAttributes.addFlashAttribute("msg", "create success");
        return "redirect:/category";
    }
    @GetMapping("/update/{id}")
    public String showFormUpdate(@PathVariable Integer id, Model model){
        model.addAttribute("category",categoryService.detailCategory(id));
        return "updateCategory";
    }
    @PostMapping("/update")
    public String upadate(@ModelAttribute Category category, RedirectAttributes redirectAttributes, Model model) {
        if (categoryService.detailCategory(category.getId())==null){
            model.addAttribute("category",categoryService.detailCategory(category.getId()));
            return "updateCategory";
        }
        categoryService.editCategory(category);
        redirectAttributes.addFlashAttribute("msg", "create success");
        return "redirect:/category";
    }
    @GetMapping("/delete/{id}")
    public String delete(@ModelAttribute Category category, RedirectAttributes redirectAttributes, Model model) {
        if (categoryService.detailCategory(category.getId())==null){
            redirectAttributes.addFlashAttribute("msg", "create no success");
            return "redirect:/category";
        }
        categoryService.deleteCategory(category);
        redirectAttributes.addFlashAttribute("msg", "create success");
        return "redirect:/category";
    }

}
