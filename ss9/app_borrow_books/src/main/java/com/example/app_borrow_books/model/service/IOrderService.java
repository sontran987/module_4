package com.example.app_borrow_books.model.service;

import com.example.app_borrow_books.model.model.Order;

import java.util.List;

public interface IOrderService {
    List<Order> display();
    void create(Order order);
    String findByCode();
    void delete(int id);
    void borrow(Integer id);
    void giveBack(Integer id);
    boolean returnBook(String code);
    Order findByCode(String code);

}
