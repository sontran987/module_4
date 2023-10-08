package com.example.jewelry_be.model;

import javax.persistence.*;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private String price;
    private Boolean flagDeleted;
    @ManyToOne
    private OrderUser orderUser;
    @ManyToOne
    private Product product;

    public OrderDetail() {
    }

    public OrderDetail(Integer id, Integer quantity, String price, Boolean flagDeleted, OrderUser orderUser, Product product) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.flagDeleted = flagDeleted;
        this.orderUser = orderUser;
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public OrderUser getOrderUser() {
        return orderUser;
    }

    public void setOrderUser(OrderUser orderUser) {
        this.orderUser = orderUser;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
