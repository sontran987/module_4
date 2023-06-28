package com.example.app_borrow_books.controller;

import com.example.app_borrow_books.dto.BookDto;
import com.example.app_borrow_books.model.model.Book;
import com.example.app_borrow_books.model.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class BookController {
    @Autowired
    private IBookService bookService;
    @GetMapping("")
    public String home(Model model){
        model.addAttribute("book",bookService.display());
        return "displayBook";
    }
    @GetMapping("/create")
    public String showFormCreate(Model model){
        model.addAttribute("book",new BookDto());
        return "createBook";
    }
    @PostMapping("/create")
    public String create(@Valid @ModelAttribute BookDto bookDto, BindingResult bindingResult,
                         RedirectAttributes redirectAttributes,Model model){
        if (bindingResult.hasErrors()){
            model.addAttribute("book",bookDto);
            return "createBook";
        }
        Book book = new Book();
        BeanUtils.copyProperties(bookDto,book);
        bookService.create(book);
        return "redirect:";
    }
}
