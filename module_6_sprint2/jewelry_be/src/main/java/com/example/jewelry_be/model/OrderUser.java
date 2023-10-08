package com.example.jewelry_be.model;

import javax.persistence.*;

@Entity
public class OrderUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String orderDate;
    private String note;
    private Boolean flagDeleted;
    @ManyToOne
    private UserInformation userInformation;

    public OrderUser() {
    }

    public OrderUser(Integer id, String orderDate, String note, Boolean flagDeleted, UserInformation userInformation) {
        this.id = id;
        this.orderDate = orderDate;
        this.note = note;
        this.flagDeleted = flagDeleted;
        this.userInformation = userInformation;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDelete) {
        this.flagDeleted = flagDelete;
    }

    public UserInformation getUserInformation() {
        return userInformation;
    }

    public void setUserInformation(UserInformation userInformation) {
        this.userInformation = userInformation;
    }
}
