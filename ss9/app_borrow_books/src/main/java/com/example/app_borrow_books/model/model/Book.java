package com.example.app_borrow_books.model.model;

import javax.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String author;

    private int  amount;

    @Column(name = "is_flag_delete", columnDefinition = "bit default 0")
    private boolean isFlagDelete;

    public Book() {
    }

    public Book(int id, String name, String author, int amount, boolean isFlagDelete) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.amount = amount;
        this.isFlagDelete = isFlagDelete;
    }

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
