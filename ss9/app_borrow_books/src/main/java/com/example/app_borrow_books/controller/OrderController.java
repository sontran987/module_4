package com.example.app_borrow_books.controller;

import com.example.app_borrow_books.dto.OrderDto;
import com.example.app_borrow_books.model.model.Order;
import com.example.app_borrow_books.model.service.IBookService;
import com.example.app_borrow_books.model.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.persistence.criteria.CriteriaBuilder;

@Controller
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IBookService bookService;

    @GetMapping("/display")
    public String display(Model model) {
        model.addAttribute("borrow", orderService.display());
        model.addAttribute("order",new OrderDto());
        return "displayOrder";
    }

    @GetMapping("/add/{id}")
    public String showBrrowBook(@PathVariable Integer id, Model model, RedirectAttributes redirectAttributes) {
        if (bookService.findById(id) == null) {
            model.addAttribute("book", bookService.display());
            return "displayBook";
        }
        else if (bookService.findById(id).getAmount() <1 ) {
            redirectAttributes.addFlashAttribute("msg","so luong sach da het");
            return "500";
        }
        String code = orderService.findByCode();
        Order order = new Order(code, bookService.findById(id));
        orderService.create(order);
        orderService.borrow(id);
        model.addAttribute("book", bookService.display());
        return "displayBook";
    }
    @PostMapping("/giveBack")
    public String giveBack(@ModelAttribute Order order, Model model, RedirectAttributes redirectAttributes){
        if (orderService.returnBook(order.getCodeBorrowBook())){
            orderService.giveBack(orderService.findByCode(order.getCodeBorrowBook()).getBook().getId());
            orderService.delete(orderService.findByCode(order.getCodeBorrowBook()).getId());
            return "redirect:/orders/display";
        }
        redirectAttributes.addFlashAttribute("msg","ma muon sach khong dung");
        return "redirect:/orders/display";
    }

}
