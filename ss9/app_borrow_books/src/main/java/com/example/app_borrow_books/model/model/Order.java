package com.example.app_borrow_books.model.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private int id;
    @Column(name = "code_borrow_book", nullable = false)
    private String codeBorrowBook;
    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book book;
    @Column(name = "is_flag_delete", columnDefinition = "bit default 0")
    private boolean isFlagDelete;

    public Order() {
    }

    public Order(String codeBorrowBook, Book book) {
        this.codeBorrowBook = codeBorrowBook;
        this.book = book;
    }

    public Order(int id, String codeBorrowBook, Book book, boolean isFlagDelete) {
        this.id = id;
        this.codeBorrowBook = codeBorrowBook;
        this.book = book;
        this.isFlagDelete = isFlagDelete;
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

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }
}
