package com.example.jewelry_be.model;

import javax.persistence.*;

@Entity
public class AccountUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    private String userPassword;
    private Boolean flagDeleted;
    @ManyToOne
    private RoleUser roleUser;

    public AccountUser() {
    }

    public AccountUser(Integer id, String email, String userPassword, Boolean flagDeleted, RoleUser roleUser) {
        this.id = id;
        this.email = email;
        this.userPassword = userPassword;
        this.flagDeleted = flagDeleted;
        this.roleUser = roleUser;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public RoleUser getRoleUser() {
        return roleUser;
    }

    public void setRoleUser(RoleUser roleUser) {
        this.roleUser = roleUser;
    }
}
