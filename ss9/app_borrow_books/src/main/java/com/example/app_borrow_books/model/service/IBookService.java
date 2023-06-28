package com.example.app_borrow_books.model.service;

import com.example.app_borrow_books.model.model.Book;

import java.util.List;

public interface IBookService {
    List<Book> display();
    boolean create(Book book);
    Book findById(Integer id);

}
