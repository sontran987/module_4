package com.example.jewelry_be.model;

import javax.persistence.*;

@Entity
public class OrderCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private Boolean flagDeleted;
    @ManyToOne
    private UserInformation userInformation;
    @ManyToOne
    private Product product;

    public OrderCart() {
    }

    public OrderCart(Integer id, Integer quantity, Boolean flagDeleted, UserInformation userInformation, Product product) {
        this.id = id;
        this.quantity = quantity;
        this.flagDeleted = flagDeleted;
        this.userInformation = userInformation;
        this.product = product;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public UserInformation getUserInformation() {
        return userInformation;
    }

    public void setUserInformation(UserInformation userInformation) {
        this.userInformation = userInformation;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
