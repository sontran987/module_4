package com.example.app_borrow_books.model.service.impl;

import com.example.app_borrow_books.model.model.Book;
import com.example.app_borrow_books.model.model.Order;
import com.example.app_borrow_books.model.repository.IBookRepository;
import com.example.app_borrow_books.model.repository.IOrderRepository;
import com.example.app_borrow_books.model.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class OrderServiceImpl implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IBookRepository bookRepository;

    @Override
    public List<Order> display() {
        return orderRepository.findAll();
    }

    @Override
    public void create(Order order) {
        orderRepository.save(order);
    }

    @Override
    public String findByCode() {
        Random random = new Random();
        String code = String.valueOf(random.nextInt(90000) + 10000);
        for (int i = 0; i < display().size(); i++) {
            if (display().get(i).getCodeBorrowBook().equals(code)) {
                code = String.valueOf(random.nextInt(90000) + 10000);
                i = 0;
            }
        }
        return code;
    }

    @Override
    public void delete(int id) {
        orderRepository.isDelete(id);
    }

    @Override
    public void borrow(Integer id) {
        for (Book b : bookRepository.findAll()) {
            if (b.getId()==id){
                b.setAmount(b.getAmount()-1);
                bookRepository.save(b);
            }
        }
    }

    @Override
    public void giveBack(Integer id) {
        for (Book b : bookRepository.findAll()) {
            if (b.getId()==id){
                b.setAmount(b.getAmount()+1);
                bookRepository.save(b);
            }
        }
    }

    @Override
    public boolean returnBook(String code) {
        if (orderRepository.findByCodeBorrowBook(code)==null){
            return false;
        }
       return true;
    }

    @Override
    public Order findByCode(String code) {
        return orderRepository.findByCodeBorrowBook(code);
    }
}
