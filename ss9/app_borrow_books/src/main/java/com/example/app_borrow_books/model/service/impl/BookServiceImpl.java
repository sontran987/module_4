package com.example.app_borrow_books.model.service.impl;

import com.example.app_borrow_books.model.model.Book;
import com.example.app_borrow_books.model.repository.IBookRepository;
import com.example.app_borrow_books.model.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class BookServiceImpl implements IBookService {
    @Autowired
    private IBookRepository bookRepository;
    @Override
    public List<Book> display() {
        return bookRepository.findAll();
    }

    @Override
    public boolean create(Book book) {
        bookRepository.save(book);
        return false;
    }

    @Override
    public Book findById(Integer id) {
        try{
            return (Book) bookRepository.findById(id).get();
        }catch (Exception e){
            return null;
        }
    }
}
