package com.example.jewelry_be.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class OrderUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date orderDate;
    private String note;
    private Boolean flagDeleted;
    @ManyToOne
    private UserInformation userInformation;

    public OrderUser() {
    }

    public OrderUser(Integer id, Date orderDate, String note, Boolean flagDeleted, UserInformation userInformation) {
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

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
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
