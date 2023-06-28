package com.example.app_borrow_books.dto;

import com.example.app_borrow_books.model.model.Book;

import javax.validation.constraints.Pattern;

public class OrderDto {
    private int id;
    @Pattern(regexp = "^[0-9]{5}$")
    private String codeBorrowBook;
    private boolean isFlagDelete;
    private Book book;

    public OrderDto() {
    }

    public OrderDto(String codeBorrowBook, Book book) {
        this.codeBorrowBook = codeBorrowBook;
        this.book = book;
    }

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }

    public OrderDto(int id, String codeBorrowBook, boolean isFlagDelete, Book book) {
        this.id = id;
        this.codeBorrowBook = codeBorrowBook;
        this.isFlagDelete = isFlagDelete;
        this.book = book;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodeBorrowBook() {
        return codeBorrowBook;
    }

    public void setCodeBorrowBook(String codeBorrowBook) {
        this.codeBorrowBook = codeBorrowBook;
    }


    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
