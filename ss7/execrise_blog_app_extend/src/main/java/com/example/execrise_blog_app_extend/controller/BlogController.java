package com.example.execrise_blog_app_extend.controller;

import com.example.execrise_blog_app_extend.model.model.Blog;
import com.example.execrise_blog_app_extend.model.model.Category;
import com.example.execrise_blog_app_extend.model.service.IBlogService;
import com.example.execrise_blog_app_extend.model.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class BlogController {
    @Autowired
    private IBlogService blogService;
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/")
    public String home(@PageableDefault(size = 3, sort = "dateSubmitted", direction = Sort.Direction.ASC)
                           Pageable pageable, Model model) {
        model.addAttribute("blogList", blogService.displayBlog(pageable));
        model.addAttribute("category", categoryService.displayCategory());
        return "display";
    }

    @GetMapping("/detail/{id}")
    public String detail(@PathVariable Integer id, Model model, RedirectAttributes redirectAttributes) {
        if (blogService.detailBlog(id) == null) {
            redirectAttributes.addFlashAttribute("msg", "not fount by id");
            return "redirect:/";
        } else {
            model.addAttribute("blogList", blogService.detailBlog(id));
            return "detail";
        }
    }

    @GetMapping("/add")
    public String showFormAdd(Model model) {
        Blog blog = new Blog();
        model.addAttribute("blog", blog);
        model.addAttribute("category", categoryService.displayCategory());
        return "create";
    }

    @PostMapping("/add")
    public String create(@ModelAttribute Blog blog, RedirectAttributes redirectAttributes) {
        blogService.createBlog(blog);
        redirectAttributes.addFlashAttribute("msg", "create success");
        return "redirect:/";
    }

    @GetMapping("/edit/{id}")
    public String showFormEdit(@PathVariable Integer id, Model model, RedirectAttributes redirectAttributes) {
        if (blogService.detailBlog(id) == null) {
            redirectAttributes.addFlashAttribute("msg", "not fount by id");
            return "redirect:/";
        } else {
            model.addAttribute("blog", blogService.detailBlog(id));
            return "update";
        }
    }

    @PostMapping("/edit")
    public String edit(@ModelAttribute Blog blog, RedirectAttributes redirectAttributes) {
        blogService.editBlog(blog);
        redirectAttributes.addFlashAttribute("msg", "edit success");
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Integer id, RedirectAttributes redirectAttributes) {
        if (blogService.detailBlog(id) == null) {
            redirectAttributes.addFlashAttribute("msg", "not fount by id");
            return "redirect:/";
        } else {
//            blogService.detailBlog(id).setFlagDelete(true);
            blogService.deleteBlog(blogService.detailBlog(id));

            redirectAttributes.addFlashAttribute("msg", "delete success");
            return "redirect:/";
        }
    }

    @PostMapping("/search")
    public String search(@RequestParam(value = "search", required = false) String title,
                         @RequestParam(value = "category", required = false)Category category,
                         @PageableDefault(size = 3, sort = "id", direction = Sort.Direction.ASC) Pageable pageable
                         , Model model, RedirectAttributes redirectAttributes) {
        if(title == "" && category == null){
            return "redirect:/";
        }
        model.addAttribute("blogList", blogService.search(pageable,title, category));
        model.addAttribute("category", categoryService.displayCategory());
        return "display";
    }
}
