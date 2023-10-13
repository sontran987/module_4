package com.example.jewelry_be.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CategoryProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String categoryProductName;

    public CategoryProduct() {
    }

    public CategoryProduct(Integer id, String categoryProductName) {
        this.id = id;
        this.categoryProductName = categoryProductName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategoryProductName() {
        return categoryProductName;
    }

    public void setCategoryProductName(String categoryProductName) {
        this.categoryProductName = categoryProductName;
    }
}
