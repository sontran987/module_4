package com.example.app_borrow_books.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class BookDto {
    private int id;
    @NotBlank
    @Pattern(regexp = "^[\\w\\s]+$", message = "Don't have  @ ; , . = - + ")
    private String name;
    @NotBlank
    @Pattern(regexp = "^[\\w\\s]+$", message = "Don't have  @ ; , . = - + ")
    private String author;
    private int amount;

    private boolean isFlagDelete;

    public BookDto() {
    }

    public BookDto(int id, String name, String author, int amount, boolean isFlagDelete) {
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
